import { makeAutoObservable } from 'mobx'; 

class Data {
    store = {
        firstName: '',
        lastName: '',
        gender: '',
        policyAgree: false,
        notifications: null,
    }

    constructor() {
        makeAutoObservable(this)
    }

    setFirstName(value) {
        this.store.firstName = value;
    }
    setLastName(value) {
        this.store.lastName = value;
    }
    setGender(value) {
        this.store.gender = value;
    }
    setPolicyAgree(value) {
        this.store.policyAgree = value;
    }
    setNotifications(value) {
        this.store.notifications = value;
    }
};

export default new Data();