import { Page, Locator, expect } from '@playwright/test'

export class AppointmentsPage {
    readonly page : Page;
    readonly createAppointmentButton : Locator;
    readonly patientSelect : Locator;
    readonly providerSelect : Locator;
    readonly date : Locator;
    readonly startTime : Locator;
    readonly endTime : Locator;
    patientList : Locator[];
    providerList : Locator[];
    readonly scheduleButton : Locator;


    constructor (page : Page) {
        this.page = page;
        this.createAppointmentButton = page.getByText('Schedule Appointment');
        this.patientSelect = page.getByTestId('create-appt-patient-select');
        this.providerSelect = page.getByTestId('create-appt-provider-select');
        this.date = page.getByTestId('create-appt-date-input');
        this.startTime = page.getByTestId('create-appt-start-time-input');
        this.endTime = page.getByTestId('create-appt-end-time-input');
        this.scheduleButton = page.getByTestId('create-appt-submit-button');
        this.patientList = [];
        this.providerList = [];

        
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
        await this.providerSelect.click();
        this.providerList = await this.page.locator("//div[@role='listbox']/div/div/span[2]").all();
        let length = this.providerList.length;

        let randomIndex = await this.getRandomInt(0, length - 1);
        let name = await this.providerList[randomIndex].textContent();
        console.log(name);
        await this.providerList[randomIndex].click();
    }


    async selectPatient(name : string){

    }


    async selectProvider(name : string){

    }

    async getRandomFutureDate(){
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 7);
        const isoDate = futureDate.toISOString().split('T')[0];
        return isoDate;
    }

    async selectRandomFutureDate(){
        await this.date.click();
        await this.date.fill(await this.getRandomFutureDate());
    }


    async scheduleAppointment(){
        await this.createAppointmentButton.click();
        await this.selectRandomPatient();
        await this.selectRandomProvider();
        await this.selectRandomFutureDate();
        await this.startTime.fill('14:30');
        await this.endTime.fill('15:30');
        await this.scheduleButton.click();
        console.log('hello');


    }









}