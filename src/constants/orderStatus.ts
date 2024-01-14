export const ORDER_STATUS = {
    BEING_PREPARED: {
        value: 0,
        name: 'Being Prepared'
    },
    TO_SHIP: {
        value: 1,
        name: 'To Ship'
    },
    TO_RECEIVE: {
        value: 2,
        name: 'To Receive'
    },
    COMPLETED: {
        value: 3,
        name: 'Completed'
    },
    CANCELLED: {
        value: 4,
        name: 'Cancelled'
    }
} as const;

export const covertStatusToName = (status: number): string => {
    switch (status) {
        case ORDER_STATUS.BEING_PREPARED.value:
            return ORDER_STATUS.BEING_PREPARED.name;
        case ORDER_STATUS.CANCELLED.value:
            return ORDER_STATUS.CANCELLED.name;
        case ORDER_STATUS.COMPLETED.value:
            return ORDER_STATUS.COMPLETED.name;
        case ORDER_STATUS.TO_RECEIVE.value:
            return ORDER_STATUS.TO_RECEIVE.name;
        case ORDER_STATUS.TO_SHIP.value:
            return ORDER_STATUS.TO_SHIP.name;
        default:
            return '';
    }
};

export const convertStatusToValue = (status: string): number => {
    switch (status) {
        case ORDER_STATUS.BEING_PREPARED.name:
            return ORDER_STATUS.BEING_PREPARED.value;
        case ORDER_STATUS.CANCELLED.name:
            return ORDER_STATUS.CANCELLED.value;
        case ORDER_STATUS.COMPLETED.name:
            return ORDER_STATUS.COMPLETED.value;
        case ORDER_STATUS.TO_RECEIVE.name:
            return ORDER_STATUS.TO_RECEIVE.value;
        case ORDER_STATUS.TO_SHIP.name:
            return ORDER_STATUS.TO_SHIP.value;
        default:
            return -1;
    }
};
