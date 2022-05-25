export type Solancer = {
  version: '0.1.0';
  name: 'solancer';
  instructions: [
    {
      name: 'createDeveloper';
      accounts: [
        {
          name: 'developer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'profileImageUrl';
          type: 'string';
        },
        {
          name: 'role';
          type: 'string';
        },
        {
          name: 'cvUrl';
          type: 'string';
        }
      ];
    },
    {
      name: 'createCompany';
      accounts: [
        {
          name: 'company';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'profileImageUrl';
          type: 'string';
        },
        {
          name: 'role';
          type: 'string';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'developerAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'walletAddress';
            type: 'publicKey';
          },
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'profileImageUrl';
            type: 'string';
          },
          {
            name: 'role';
            type: 'string';
          },
          {
            name: 'point';
            type: 'u64';
          },
          {
            name: 'cvUrl';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'companyAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'walletAddress';
            type: 'publicKey';
          },
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'profileImageUrl';
            type: 'string';
          },
          {
            name: 'role';
            type: 'string';
          },
          {
            name: 'point';
            type: 'u64';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'CannotCreateUser';
      msg: 'User cannot be created, missing data';
    }
  ];
};

export const IDL: Solancer = {
  version: '0.1.0',
  name: 'solancer',
  instructions: [
    {
      name: 'createDeveloper',
      accounts: [
        {
          name: 'developer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'profileImageUrl',
          type: 'string',
        },
        {
          name: 'role',
          type: 'string',
        },
        {
          name: 'cvUrl',
          type: 'string',
        },
      ],
    },
    {
      name: 'createCompany',
      accounts: [
        {
          name: 'company',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'profileImageUrl',
          type: 'string',
        },
        {
          name: 'role',
          type: 'string',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'developerAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'walletAddress',
            type: 'publicKey',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'profileImageUrl',
            type: 'string',
          },
          {
            name: 'role',
            type: 'string',
          },
          {
            name: 'point',
            type: 'u64',
          },
          {
            name: 'cvUrl',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'companyAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'walletAddress',
            type: 'publicKey',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'profileImageUrl',
            type: 'string',
          },
          {
            name: 'role',
            type: 'string',
          },
          {
            name: 'point',
            type: 'u64',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'CannotCreateUser',
      msg: 'User cannot be created, missing data',
    },
  ],
};