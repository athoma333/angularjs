import { Airline } from "./airline.component";
import { Seat } from "./seat.component";

export class Flight{
    id: Number;
	flightNo: String;
	fromPlace: String; 
	toPlace: String;
	startDate: String;
	startTime: String;
	endDate: String;
	endTime: String;
    airline:Airline;
    seat: Seat[];
}