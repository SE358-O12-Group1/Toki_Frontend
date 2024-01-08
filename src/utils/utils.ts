export function formatCurrency(currency: number) {
    return new Intl.NumberFormat('de-DE').format(currency);
}

export function formatNumberToSocialStyle(value: number) {
    return new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 1
    })
        .format(value)
        .replace('.', ',')
        .toLocaleLowerCase();
}

export const rateSale = (original: number, sale: number) =>
    Math.round(((original - sale) / original) * 100) + '%';

const removeSpecialCharacter = (str: string) =>
    // eslint-disable-next-line no-useless-escape
    str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        ''
    );

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
    return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`;
};

export const getIdFromNameId = (nameId: string) => {
    const arr = nameId.split('-i-');
    return arr[arr.length - 1];
};

export function removeVietnamesePhonetics(input: string): string {
    // Define a regular expression pattern for Vietnamese characters with diacritics
    const vietnamesePattern = /[\u0300-\u036f]/g;

    // Use normalize to handle composed and decomposed characters, then replace
    const result = input.normalize('NFD').replace(vietnamesePattern, '');

    return result;
}
