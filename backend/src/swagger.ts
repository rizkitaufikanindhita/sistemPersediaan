export const swaggerDocument = {
  swagger: "2.0",
  info: {
    title: "API Sistem Persediaan",
    version: "1.0.0",
    description: "API Untuk Sistem Persediaan",
  },
  paths: {
    "/api/v1/user/signup": {
      post: {
        summary: "User Signup",
        description: "Signup dengan NIP, name, bagian, dan email",
        parameters: [
          {
            in: "body",
            name: "user",
            description: "User signup data",
            required: true,
            schema: {
              $ref: "#/definitions/Signup",
            },
          },
        ],
        responses: {
          "200": {
            description: "User berhasil registrasi",
            schema: {
              type: "object",
              properties: {
                msg: {
                  type: "string",
                  example: "user berhasil ditambah",
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/user/signin": {
      post: {
        summary: "User Signin",
        description: "Signin dengan NIP, dan password",
        parameters: [
          {
            in: "body",
            name: "user",
            description: "User signin data",
            required: true,
            schema: {
              $ref: "#/definitions/Signin",
            },
          },
        ],
        responses: {
          "200": {
            description: "User berhasil signin",
            schema: {
              type: "object",
              properties: {
                msg: {
                  type: "string",
                  example: "user berhasil signin",
                },
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    Signup: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "User full name",
          example: "john doe",
        },
        nip: {
          type: "string",
          description: "User NIP",
          example: "123456789",
        },
        bagian: {
          type: "string",
          description: "Bagian dari user",
          example: "umum",
        },
        password: {
          type: "string",
          description: "Password user",
          example: "password123",
        },
        email: {
          type: "string",
          description: "Email user",
          example: "johndoe@example.com",
        },
      },
      required: ["name", "nip", "bagian", "password", "email"],
    },
    Signin: {
      type: "object",
      properties: {
        nip: {
          type: "string",
          description: "User NIP",
          example: "123456789",
        },
        password: {
          type: "string",
          description: "Password user",
          example: "password123",
        },
      },
      required: ["nip", "password"],
    },
  },
};
