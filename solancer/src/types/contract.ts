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
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'treasurer';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
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
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'treasurer';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
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
    },
    {
      name: 'createJd';
      accounts: [
        {
          name: 'jd';
          isMut: true;
          isSigner: true;
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
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'title';
          type: 'string';
        },
        {
          name: 'jdContentUrl';
          type: 'string';
        },
        {
          name: 'maxSlot';
          type: 'u64';
        }
      ];
    },
    {
      name: 'addSubmission';
      accounts: [
        {
          name: 'jd';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'developer';
          type: 'publicKey';
        },
        {
          name: 'msg';
          type: 'string';
        }
      ];
    },
    {
      name: 'addApprovement';
      accounts: [
        {
          name: 'jd';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'developer';
          type: 'publicKey';
        }
      ];
    },
    {
      name: 'createInterview';
      accounts: [
        {
          name: 'interview';
          isMut: true;
          isSigner: true;
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
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'jdTitle';
          type: 'string';
        },
        {
          name: 'testUrl';
          type: 'string';
        }
      ];
    },
    {
      name: 'addInterviewSubmission';
      accounts: [
        {
          name: 'interview';
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'developer';
          type: 'publicKey';
        },
        {
          name: 'testSubmitUrl';
          type: 'string';
        }
      ];
    },
    {
      name: 'updateInterviewResult';
      accounts: [
        {
          name: 'interview';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'result';
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
    },
    {
      name: 'jdAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'company';
            type: 'publicKey';
          },
          {
            name: 'title';
            type: 'string';
          },
          {
            name: 'jdContentUrl';
            type: 'string';
          },
          {
            name: 'maxSlot';
            type: 'u64';
          },
          {
            name: 'approvedList';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'pendingList';
            type: {
              vec: {
                defined: 'PendingSubmission';
              };
            };
          },
          {
            name: 'isAvailable';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'interviewAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'developer';
            type: 'publicKey';
          },
          {
            name: 'jdTitle';
            type: 'string';
          },
          {
            name: 'testUrl';
            type: 'string';
          },
          {
            name: 'testSubmitUrl';
            type: 'string';
          },
          {
            name: 'result';
            type: 'string';
          }
        ];
      };
    }
  ];
  types: [
    {
      name: 'PendingSubmission';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'msg';
            type: 'string';
          },
          {
            name: 'developer';
            type: 'publicKey';
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
    },
    {
      code: 6001;
      name: 'CannotCreateJD';
      msg: 'JD cannot be created, missing data';
    },
    {
      code: 6002;
      name: 'InvalidJDMaxSlot';
      msg: 'JD cannot be created, max slot is 0 or greater than 50';
    },
    {
      code: 6003;
      name: 'CannotAddSubmission';
      msg: 'Submission cannot be added, missing data';
    },
    {
      code: 6004;
      name: 'NoSlotLeft';
      msg: 'JD has no slot left';
    },
    {
      code: 6005;
      name: 'AlreadySubmitted';
      msg: 'Submission already exists';
    },
    {
      code: 6006;
      name: 'CannotAddApprovement';
      msg: 'Approvement cannot be added, missing data';
    },
    {
      code: 6007;
      name: 'CannotCreateInterview';
      msg: 'Interview cannot be added, missing data';
    },
    {
      code: 6008;
      name: 'CannotUpdateInterviewResult';
      msg: 'Interview result cannot be updated, missing data';
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
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'treasurer',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
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
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'treasurer',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
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
    {
      name: 'createJd',
      accounts: [
        {
          name: 'jd',
          isMut: true,
          isSigner: true,
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
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'jdContentUrl',
          type: 'string',
        },
        {
          name: 'maxSlot',
          type: 'u64',
        },
      ],
    },
    {
      name: 'addSubmission',
      accounts: [
        {
          name: 'jd',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'developer',
          type: 'publicKey',
        },
        {
          name: 'msg',
          type: 'string',
        },
      ],
    },
    {
      name: 'addApprovement',
      accounts: [
        {
          name: 'jd',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'developer',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'createInterview',
      accounts: [
        {
          name: 'interview',
          isMut: true,
          isSigner: true,
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
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'jdTitle',
          type: 'string',
        },
        {
          name: 'testUrl',
          type: 'string',
        },
      ],
    },
    {
      name: 'addInterviewSubmission',
      accounts: [
        {
          name: 'interview',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'developer',
          type: 'publicKey',
        },
        {
          name: 'testSubmitUrl',
          type: 'string',
        },
      ],
    },
    {
      name: 'updateInterviewResult',
      accounts: [
        {
          name: 'interview',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'result',
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
    {
      name: 'jdAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'company',
            type: 'publicKey',
          },
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'jdContentUrl',
            type: 'string',
          },
          {
            name: 'maxSlot',
            type: 'u64',
          },
          {
            name: 'approvedList',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'pendingList',
            type: {
              vec: {
                defined: 'PendingSubmission',
              },
            },
          },
          {
            name: 'isAvailable',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'interviewAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'developer',
            type: 'publicKey',
          },
          {
            name: 'jdTitle',
            type: 'string',
          },
          {
            name: 'testUrl',
            type: 'string',
          },
          {
            name: 'testSubmitUrl',
            type: 'string',
          },
          {
            name: 'result',
            type: 'string',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'PendingSubmission',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'msg',
            type: 'string',
          },
          {
            name: 'developer',
            type: 'publicKey',
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
    {
      code: 6001,
      name: 'CannotCreateJD',
      msg: 'JD cannot be created, missing data',
    },
    {
      code: 6002,
      name: 'InvalidJDMaxSlot',
      msg: 'JD cannot be created, max slot is 0 or greater than 50',
    },
    {
      code: 6003,
      name: 'CannotAddSubmission',
      msg: 'Submission cannot be added, missing data',
    },
    {
      code: 6004,
      name: 'NoSlotLeft',
      msg: 'JD has no slot left',
    },
    {
      code: 6005,
      name: 'AlreadySubmitted',
      msg: 'Submission already exists',
    },
    {
      code: 6006,
      name: 'CannotAddApprovement',
      msg: 'Approvement cannot be added, missing data',
    },
    {
      code: 6007,
      name: 'CannotCreateInterview',
      msg: 'Interview cannot be added, missing data',
    },
    {
      code: 6008,
      name: 'CannotUpdateInterviewResult',
      msg: 'Interview result cannot be updated, missing data',
    },
  ],
};
