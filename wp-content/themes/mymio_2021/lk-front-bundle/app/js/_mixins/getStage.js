export const getStage = (age = 0, moveAbilities, lostAge) => {

    if (age <= 3) {
        return 1;
    }

    if (moveAbilities === 'Ходит сам') {
        return 2;
    }

    if (age >= 8 && moveAbilities === 'Ходит сам (но тяжело) или с поддержкой') {
        return 3;
    }

    if (parseInt(lostAge) <= age - 3) {

        if (moveAbilities === 'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками') {
            return 4;
        }
    }

    if (age - parseInt(lostAge) >= 4 ) {
        if (moveAbilities === 'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками'
            || moveAbilities === 'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена') {
            return 5;
        }
    }

    return 0;
}