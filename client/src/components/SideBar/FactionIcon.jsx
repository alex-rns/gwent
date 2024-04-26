import './FactionIcons.css'

const FactionIcon = ({ faction, asBackground = false }) => {
  const className = `icon-${faction} ${asBackground ? 'faction-icon-bg' : 'faction-icon'}`

  return <div className={className} />
}

export default FactionIcon
