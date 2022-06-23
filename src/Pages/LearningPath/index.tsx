import './index.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import Track from '../../Component/Data';
import { useParams } from 'react-router-dom';
import Button from '../../Component/Button';
import CustomChip from '../../Component/Chip';




export const Cardcourse = () => {
  const { id } = useParams<{ id?: string | undefined; }>();

  const numId = Number(id);
  const track = Track.find(track => track.id === numId);
  return (
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
        {track?.course.map(function (course) {
          return (
          <Card sx={{ display: 'flex', width: '50%', height: 250, marginBottom: '3%' }}>
            <CardMedia
              component="img"
              sx={{ width: '25%' }}
              image={track?.image}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'start', paddingLeft: '5%', width: '50%' }} >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0 }}>
                <Typography variant="h4" gutterBottom component="div">
                  {course.name}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <CustomChip label='Pemula' />
                  <CustomChip label={course.time} />
                  <CustomChip label={course.name} />
                </Stack>
              </CardContent>
              <CardActions sx={{ padding: 0 }}>
                <Button desc={'Mulai belajar'} link={`/course/${course.id}`} />
              </CardActions>
            </Box>
          </Card>
          )})}
      </Box>
  )
}


function MediaControlCard() {

  return (
    <div className="course-wrapper">
      <h1 className='title-course'>Paket Web Development Pemula</h1>
      <Cardcourse />
    </div>
  );
}

export default MediaControlCard;