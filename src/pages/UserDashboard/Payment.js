import React from 'react';
import PaymentHistoryTable from '../../components/Tables/UserTable/PaymentHistoryTable';

const Payment = () => {
    return (
        <div className='bg-bkash h-full w-full'>
            <div className="flex pt-5 justify-center flex-wrap h-full w-full">
                <div className="w-full px-4">
                    <PaymentHistoryTable color="light" />
                </div>
            </div>
        </div>
    );
};

export default Payment;