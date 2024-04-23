# frozen_string_literal: true

#
# Rolls back all database changes on failure.
#
# @note Intended to be used with the DeferredInteractor
#  to prevent irrevocable actions (like sending emails)
#  from running before the database changes have been committed.
#
# @example
#   class MyOrganizer < TransactionOrganizer
#     after_perform :send_email
#
#     def send_email
#       ...
#     end
#
#     organize do
#       add DeferredInteractor1
#       add DeferredInteractor2
#     end
#   end
#
class TransactionOrganizer < ActiveInteractor::Organizer::Base
  around_all_perform :wrap_in_transaction

  private

  def wrap_in_transaction
    ActiveRecord::Base.transaction do
      yield
      raise ActiveRecord::Rollback if context.failure?
    end
  end
end
