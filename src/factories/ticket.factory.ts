import { faker } from '@faker-js/faker/locale/pl';

export interface AddTicketModel {
    name: string;
    title: string;
    description: string;
  }

export function prepareRandomTicket(titleLength?: number, descriptionParagraphs = 5){
    let title: string;

    const name = faker.person.firstName();

    if(titleLength) title = faker.string.alpha(titleLength);
    else title = faker.lorem.sentence();

    const description = faker.lorem.paragraphs(descriptionParagraphs);

    const newTicket: AddTicketModel = {name: name, title: title, description: description};

    return newTicket;

}