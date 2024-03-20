import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be'}
            }
          }}
        >
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/431628011_433134385944566_59319457098473880_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-a7-yeDYQIkAX97pp7a&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAl3u8W42VTv8nqYyOTm3XyDRaU9WlPen1DgTD4q-JQhg&oe=65F6ED8F" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://kyluc.vn/Userfiles/Upload/images/Avatar%202(1).jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://cdn.mos.cms.futurecdn.net/ifZxgpjqTS8Dp7AuozUcSG-1200-80.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTqWxs3DSgcZpqO_YQji7KgkTG2akdwBBFOb9IJezZNgRdqIqT096jDAUIRkpBO69DVrtJL1gfAOy-d5nGzokZ3H5jezWZcNebgEZUSeX2ToAp2GuP2-a5q6p3Do9vLYg6xU7Ntl2Om3ulfmdWuEx7DB.jpg?r=957" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/431628011_433134385944566_59319457098473880_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-a7-yeDYQIkAX97pp7a&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAl3u8W42VTv8nqYyOTm3XyDRaU9WlPen1DgTD4q-JQhg&oe=65F6ED8F" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://kyluc.vn/Userfiles/Upload/images/Avatar%202(1).jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://cdn.mos.cms.futurecdn.net/ifZxgpjqTS8Dp7AuozUcSG-1200-80.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTqWxs3DSgcZpqO_YQji7KgkTG2akdwBBFOb9IJezZNgRdqIqT096jDAUIRkpBO69DVrtJL1gfAOy-d5nGzokZ3H5jezWZcNebgEZUSeX2ToAp2GuP2-a5q6p3Do9vLYg6xU7Ntl2Om3ulfmdWuEx7DB.jpg?r=957" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
