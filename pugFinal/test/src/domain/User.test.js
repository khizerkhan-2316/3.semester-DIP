import Credentials from "../../../src/domain/Credentials.js";
import User from "../../../src/domain/User.js";
import {v4 as uuidV4} from 'uuid'

describe("Test User ", () => {
    test("validate id", () => {
        //Arrange
        const id = uuidV4()
        const credentials = new Credentials('hans', 'password')
        //Act
        const user = new User(id, credentials, new Date())
        //Assert
        expect(user.id).toBe(id)
    })
    test("validate id fails", () => {
        //Arrange
        const id = "543543543"
        const credentials = new Credentials('hans', 'password')
        //Act
        const act = () => new User(id, credentials, new Date())
        //Assert
        expect(act).toThrow('Invalid Id')
    })
    test("validate date", () => {
        //Arrange
        const date = new Date()
        //Act
        const user = new User(uuidV4(), new Credentials('hans', 'password'), date)
        //Assert
        expect(user.created).toEqual(date)
    })
    test("validate fail on date", () => {
        //Arrange
        const date = "date"
        //Act
        const act = () => new User(uuidV4(), new Credentials('hans', 'password'), date)
        //Assert
        expect(act).toThrow('Invalid create time')
    })
})