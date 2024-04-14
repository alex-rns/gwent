import { useState } from 'react'
import factions from '../../utils/factions'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

function FactionSelector({ player, onSelectFactionAndLeader }) {
  const [selectedFaction, setSelectedFaction] = useState('')
  const [selectedLeader, setSelectedLeader] = useState('')
  const { t } = useTranslation()

  const handleSelect = () => {
    onSelectFactionAndLeader(player.id, selectedFaction, selectedLeader)
  }

  return (
    <div>
      <FormControl fullWidth sx={{ my: 5 }}>
        <InputLabel id="faction-select-label">{t('Select Faction')}</InputLabel>
        <Select
          labelId="faction-select-label"
          id="faction-select"
          value={selectedFaction}
          label={t('Select Faction')}
          onChange={(e) => setSelectedFaction(e.target.value)}
        >
          {factions.map((faction) => (
            <MenuItem key={faction.slug} value={faction.slug}>
              {t(faction.name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedFaction && (
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel id="leader-select-label">{t('Select Leader')}</InputLabel>
          <Select
            labelId="leader-select-label"
            id="leader-select"
            value={selectedLeader}
            label={t('Select Leader')}
            onChange={(e) => setSelectedLeader(e.target.value)}
          >
            {factions
              .find((faction) => faction.slug === selectedFaction)
              ?.leaders.map((leader) => (
                <MenuItem key={leader.slug} value={leader.slug}>
                  {t(leader.name)}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}

      {selectedLeader && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: '100%' }}
          onClick={handleSelect}
        >
          {t('Join game')}
        </Button>
      )}
    </div>
  )
}

export default FactionSelector
