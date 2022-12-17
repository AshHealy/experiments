
class VetClinic:
    def __init__(self, name):
        self.name = name
        self.patients = []

    def add_patient(self, patient):
        self.patients.append(patient)

    def list_patients(self):
        for patient in self.patients:
            print(patient)

    def book_appointment(self, patient, date, time):
        appointment = Appointment(patient, date, time)
        patient.appointments.append(appointment)

class Patient:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        self.appointments = []

    def __str__(self):
        return f'{self.name}, {self.breed}'

class Appointment:
    def __init__(self, patient, date, time):
        self.patient = patient
        self.date = date
        self.time = time