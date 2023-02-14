import React from 'react';
import ProfileCard from '../../components/Cards/UserCards/ProfileCard';
import DepositForm from '../../components/Forms/UserForms/DepositForm';

const Deposit = () => {
    return (
        <>
            <div className="flex flex-wrap bg-bkash height_handle items-center">
                <div className="w-full lg:w-8/12 px-4">
                    <DepositForm title="Deposit" />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <ProfileCard />
                </div>
            </div>
        </>
    );
};

export default Deposit;