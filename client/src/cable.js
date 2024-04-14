import { createConsumer } from '@rails/actioncable'

export const consumer = createConsumer('ws://192.168.31.114:3000/cable')
