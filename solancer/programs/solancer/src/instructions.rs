use super::schemas::*;
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{self, Token},
};

#[derive(Accounts)]
pub struct CreateDeveloper<'info> {
    // Authenticate user account
    #[account(
        init,
        seeds = [b"developer".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = DeveloperAccount::MAX_SIZE + 8
    )]
    pub developer: Account<'info, DeveloperAccount>,

    // Token program
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    #[account(seeds = [b"treasurer".as_ref(), authority.key().as_ref()], bump)]
    /// CHECK: Just a pure account
    pub treasurer: AccountInfo<'info>,

    // Authority (this is signer who paid transaction fee)
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        payer = authority,
        associated_token::mint = mint,
        associated_token::authority = treasurer
        )]
    pub token_account: Account<'info, token::TokenAccount>,

    /// System program
    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    pub associated_token_program: Program<'info, AssociatedToken>,
    pub mint: Box<Account<'info, token::Mint>>,
    // Clock to save time
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct CreateCompany<'info> {
    // Authenticate user account
    #[account(
        init,
        seeds = [b"company".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = CompanyAccount::MAX_SIZE + 8
    )]
    pub company: Account<'info, CompanyAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    #[account(seeds = [b"treasurer".as_ref(), authority.key().as_ref()], bump)]
    /// CHECK: Just a pure account
    pub treasurer: AccountInfo<'info>,

    #[account(
        init,
        payer = authority,
        associated_token::mint = mint,
        associated_token::authority = treasurer
        )]
    pub token_account: Account<'info, token::TokenAccount>,

    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    pub associated_token_program: Program<'info, AssociatedToken>,
    pub mint: Box<Account<'info, token::Mint>>,
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct CreateJD<'info> {
    // Authenticate user account
    #[account(
        init,
        payer = authority,
        space = JdAccount::MAX_SIZE + 8
    )]
    pub jd: Account<'info, JdAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct UpdateSubmission<'info> {
    #[account(mut)]
    pub jd: Account<'info, JdAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
}
#[derive(Accounts)]
pub struct CreateInterview<'info> {
    #[account(
        init,
        payer = authority,
        space = InterviewAccount::MAX_SIZE + 8
    )]
    pub interview: Account<'info, InterviewAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct AddInterviewSubmission<'info> {
    #[account(mut)]
    pub interview: Account<'info, InterviewAccount>,
}
#[derive(Accounts)]
pub struct UpdateInterviewResult<'info> {
    #[account(mut, has_one = authority)]
    pub interview: Account<'info, InterviewAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct CreateContract<'info> {
    #[account(
        init,
        seeds = [b"contract".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = ContractAccount::MAX_SIZE + 8
    )]
    pub contract: Account<'info, ContractAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    #[account(seeds = [b"treasurer".as_ref(), contract.company.as_ref(), contract.developer.as_ref()], bump)]
    /// CHECK: Just a pure account
    pub treasurer: AccountInfo<'info>,

    #[account(
        init,
        payer = authority,
        associated_token::mint = mint,
        associated_token::authority = treasurer
        )]
    pub token_account: Account<'info, token::TokenAccount>,

    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    pub associated_token_program: Program<'info, AssociatedToken>,
    pub mint: Box<Account<'info, token::Mint>>,
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct PegContract<'info> {
    #[account(mut)]
    pub contract: Account<'info, ContractAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    #[account(seeds = [b"treasurer".as_ref(), contract.company.as_ref(), contract.developer.as_ref()], bump)]
    /// CHECK: Just a pure account
    pub treasurer: AccountInfo<'info>,

    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = treasurer
        )]
    pub contract_token_account: Account<'info, token::TokenAccount>,

    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = authority
        )]
    pub owner_token_account: Account<'info, token::TokenAccount>,

    /// CHECK: Simple test account
    pub system_program: Program<'info, System>,

    pub associated_token_program: Program<'info, AssociatedToken>,
    pub mint: Box<Account<'info, token::Mint>>,
}
