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

    return total.toFixed(0);

};

export const foodCalories = ({ g, kcal }) => (g * kcal) / 100;
