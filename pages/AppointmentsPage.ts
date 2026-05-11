import { Page, Locator, expect } from '@playwright/test'

export class AppointmentsPage {
    readonly page : Page;
    readonly createAppointmentButton : Locator;
    readonly patientSelect : Locator;
    readonly provider : Locator;
    readonly date : Locator;
    readonly startTime : Locator;
    readonly endTime : Locator;
    patientList : Locator[];

    constructor (page : Page) {
        this.page = page;
        this.createAppointmentButton = page.getByText('Schedule Appointment');
        this.patientSelect = page.getByTestId('create-appt-patient-select');
        this.provider = page.getByTestId('create-appt-provider-select');
        this.date = page.getByTestId('create-appt-date-input');
        this.startTime = page.getByTestId('create-appt-start-time-input');
        this.endTime = page.getByTestId('create-appt-end-time-input');
        this.patientList = [];
    }

    async getRandomInt(min: number, max: number): Promise<number> {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    async selectRandomPatient() {
        await this.patientSelect.click();
        this.patientList = await this.page.locator("//div[@role='listbox']/div/div/span[2]").all();
        
        let length = this.patientList.length;

        let randomIndex = await this.getRandomInt(0, length - 1);
        let name = await this.patientList[randomIndex].textContent();
        console.log(name);
        await this.patientList[randomIndex].click();
    }


    async selectRandomProvider(){

    }


    async selectPatient(name : string){

    }


    async selectProvider(name : string){

    }









}