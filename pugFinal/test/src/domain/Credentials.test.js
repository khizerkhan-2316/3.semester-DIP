import Credentials from "../../../src/domain/Credentials.js";

describe("Test Credentials ", () => {
    test("validate username length =10", () => {
        //Arrange1
        const username = "0123456789"
        const password = "passwordNoTested"

        //Act
        const credentials = new Credentials(username, password)
        //Assert
        expect(credentials.username).toBe(username)
    })
    test("validate username fail length >10", () => {
        //Arrange1
        const username = "01234567891"
        const password = "passwordNotTested"

        //Act
        const ctor = () => new Credentials(username, password)
        //Assert
        expect(ctor).toThrow("Invalid UserName")
    })
    test("validate password length =6", () => {
        //Arrange1
        const username = "notTested"
        const password = "123456"

        //Act
        const credentials = new Credentials(username, password)
        //Assert
        expect(credentials.password).toBe(password)
    })
    test("validate password fail length<6", () => {
        //Arrange1
        const username = "notTested"
        const password = "12345"

        //Act
        const ctor = () => new Credentials(username, password)
        //Assert
        expect(ctor).toThrow("Invalid Password")
    })
})

//Arrange
//Act
//Assert