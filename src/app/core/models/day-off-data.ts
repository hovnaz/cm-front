import { Leaves, Vacations, Annual } from '.';

export interface DayOffData {
    leaves: Leaves[];
    vacations: Vacations[];
    annual_data: Annual;
}
