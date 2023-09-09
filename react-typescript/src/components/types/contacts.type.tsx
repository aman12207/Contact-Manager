export type ContactPayload = {
  id: number,
  firstName : string, 
  lastName : string, 
  isActive : boolean
}

export type stateType ={
  contacts: {
    contacts: ContactPayload[]
  }
}