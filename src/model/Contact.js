export class Contact {
    constructor() {
        this.contactId = 0;
        this.firstName = "";
        this.lastName = "";
    }

    validate() {
        const errorMessages = [];

        if (this.contactId < 0) {
            errorMessages.push("The contactID is less than 0: " + this.contactId);
        }

        if (!this.firstName) {
            errorMessages.push("The first name is blank.");
        }

        if (!this.lastName) {
            errorMessages.push("The last name is blank.");
        }

        let errorString = errorMessages.join("\n");

        return errorString;
    }

    populateFromDto(dto) {
        Object
            .keys(this)
            .map(key => {
                if (dto[key]) {
                    this[key] = dto[key];
                } else {
                    this[key] = null;
                }

                // Make chainable
                return this;
            });
    }
}