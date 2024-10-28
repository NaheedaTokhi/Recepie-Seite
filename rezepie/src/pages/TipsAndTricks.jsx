import React from 'react';
import '../styles/TipsAndTricks.css'; 
import { Footer2} from "../components/Footer2"

export const TipsAndTricks = () => {
    return (
      <>
        <div className="tips-container">
            <h1>Culinary Tips & Tricks</h1>
            <div className="tip">
                <h2>1. Meal Prep Like a Pro</h2>
                <p>
                    Save time during the week by preparing your meals in advance. Chop vegetables, 
                    marinate proteins, and store them in airtight containers in the fridge.
                </p>
            </div>
            <div className="tip">
                <h2>2. Spice It Up</h2>
                <p>
                    Don't be afraid to experiment with spices! A pinch of cumin or a dash of smoked paprika 
                    can elevate your dishes to new heights.
                </p>
            </div>
            <div className="tip">
                <h2>3. Use Fresh Herbs</h2>
                <p>
                    Fresh herbs can add vibrant flavors to any dish. Try adding basil to pasta, cilantro to tacos, 
                    or rosemary to roasted vegetables.
                </p>
            </div>
            <div className="tip">
                <h2>4. Experiment with Seasoning</h2>
                <p>
                    Don’t stick to salt and pepper! Try adding citrus zest, flavored oils, or specialty salts to elevate your dishes. Fresh herbs can also transform a meal.
                </p>
                </div>
            <div className="tip">
                <h2>5. Perfect Your Cooking Techniques</h2>
                <p>
                    Mastering basic techniques like sautéing, roasting, and grilling can transform your cooking. 
                    Invest time in learning these methods to create restaurant-quality meals at home.
                </p>
            </div>
            <div className="tip">
                <h2>6. Taste as You Go</h2>
                <p>
                    Always taste your food as you cook. This allows you to adjust flavors and make necessary 
                    changes before serving.
                </p>
            </div>
            <div className="tip">
                <h2>7. Learn to Love Leftovers</h2>
                <p>
                    Leftovers can be reinvented! Use yesterday’s roast chicken in a salad or as a topping for a grain bowl. Creative use of leftovers minimizes waste and saves time.
                </p>
            </div>
            <div className="tip">
                <h2>8. Know Your Cooking Temperatures</h2>
                <p>
                    Using a food thermometer can ensure meats are cooked properly without overcooking. Chicken should reach 165°F (75°C), while medium rare beef is around 135°F (57°C).
                </p>
            </div>
            <div className="tip">
                <h2>9. Keep Your Knives Sharp</h2>
                <p>
                    A sharp knife is not only safer but also makes cooking more efficient. Regularly sharpen your 
                    knives to maintain their performance.
                </p>
            </div>
            </div>
        <Footer2/>
        </>
    );
};
