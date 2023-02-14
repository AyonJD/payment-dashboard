import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProfileCard from '../../components/Cards/UserCards/ProfileCard';
import DepositForm from '../../components/Forms/UserForms/DepositForm';

const Deposit = () => {
    return (
        <div className='bg-bkash height_handle'>
            <div className="pt-6">
                <Breadcrumb title="Deposit" userName="User Name" />
            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-8/12 px-4">
                    <DepositForm title="Deposit" />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
};

export default Deposit;