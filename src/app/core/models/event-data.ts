import { Participators } from ".";

export interface EventData {
    title: string;
    description: string;
    time: string;
    place: string;
    date: string;
    photo?: any;
    duration: string;
    type: number;
    organizer_id: number;
    room: string;
    participants: string;
}
