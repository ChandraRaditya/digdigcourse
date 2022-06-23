import Chip from '@mui/material/Chip';
import { indigo } from '@mui/material/colors';


interface Props {
    label: string;
}


const CustomChip: React.FC<Props> = ({label}) => {
    return (
            <Chip label={label} sx={{ backgroundColor: indigo[50], color: '#5779F1' }} />
    );
}


export default CustomChip;