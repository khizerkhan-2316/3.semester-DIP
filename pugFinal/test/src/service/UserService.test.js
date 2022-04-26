import Repository from "../../../src/persistence/Repository.js";
import {v4 as uuidV4} from "uuid";
import Credentials from "../../../src/domain/Credentials.js";
import User from "../../../src/domain/User.js";
import UserService from "../../../src/service/UserService.js";
import {jest} from '@jest/globals'

describe("Test UserService ", () => {
    test("Verify user", () => {
        //Arrange
        const id = uuidV4()
        const credentials = new Credentials('hans', 'password')

        const repositoryMock = jest
            .spyOn(Repository.prototype, 'getUserByUserName')
            .mockImplementation((username) => {
                return new User(id, credentials, new Date())
            });


        //Repository.getUserByUserName(credentials.username).mockResolvedValue(new User(id, credentials, new Date()))
        const userService = new UserService()
        //Act
        const res = userService.verifyUser(credentials)

        //Assert
        expect(res).toBeTruthy()
    })
    test("Verify user fails", () => {
        //Arrange
        const id = uuidV4()
        const credentials = new Credentials('hans', 'password')
        const storedCredentials = new Credentials('hans', 'password1')


        const repositoryMock = jest
            .spyOn(Repository.prototype, 'getUserByUserName')
            .mockImplementation((username) => {
                return new User(id, storedCredentials, new Date())
            });


        //Repository.getUserByUserName(credentials.username).mockResolvedValue(new User(id, credentials, new Date()))
        const userService = new UserService()
        //Act
        const res = userService.verifyUser(credentials)

        //Assert
        expect(res).toBeFalsy()
    })
})