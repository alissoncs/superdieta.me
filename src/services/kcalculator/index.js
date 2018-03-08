/**
 * 100 kcal
 * g    x
 * g*kcal/100
 */
export const totalDishCalories = (dish) => {
    
    let total = 0;

    dish.forEach(food => {
        total += (food.g * food.kcal) / 100;
    });

    // return total.toFixed(0);
    return Math.round(total);

};

export const totalCarbs = (dish) => {
    let total = 0;
    dish.forEach(food => {
        let { carbs } = food;
        if(!carbs) carbs = 0;
        total += (food.g * carbs) / 100;
    });

    return total;
};

export const totalFats = dish => {
    let total = 0;
    dish.forEach(food => {
        let { fats } = food;
        if(!fats) fats = 0;
        total += (food.g * fats) / 100;
    });
    return total
}

export const totalProtein = (dish) => {
    let total = 0;
    dish.forEach(food => {
        let { protein } = food;
        if(!protein) protein = 0;
        total += (food.g * protein) / 100;
    });
    return total

    // return total.toFixed(0);
    return Math.round(total);
};

export const foodCalories = ({ g, kcal }) => (g * kcal) / 100;
