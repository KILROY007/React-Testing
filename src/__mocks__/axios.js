const mockedResponse = {
    data : {
        results : [
        {
            name : {
                first : "Sumant",
                last : "Hegde"
            },
            picture : {
                large : "www.google.com"
            },
            login : {
                username : "kilroy"
            }
        },
        {
            name : {
                first : "Sumant",
                last : "Hegde"
            },
            picture : {
                large : "www.google.com"
            },
            login : {
                username : "kilroy"
            }
        },
        {
            name : {
                first : "Sumant",
                last : "Hegde"
            },
            picture : {
                large : "www.google.com"
            },
            login : {
                username : "kilroy"
            }
        },
        {
            name : {
                first : "Sumant",
                last : "Hegde"
            },
            picture : {
                large : "www.google.com"
            },
            login : {
                username : "kilroy"
            }
        },
        {
            name : {
                first : "Sumant",
                last : "Hegde"
            },
            picture : {
                large : "www.google.com"
            },
            login : {
                username : "kilroy"
            }
        },
        ]
    }
}

export default {
    get : jest.fn().mockResolvedValue(mockedResponse)
}