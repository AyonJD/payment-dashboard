import React from 'react';
import CashOutForm from '../../components/Forms/UserForms/CashOutForm';

const CashOut = () => {
    return (
        <div className='bg-bkash h-full flex items-center'>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <CashOutForm title="Cash Out" />
                </div>
            </div>
        </div>
    );
};

export default CashOut;