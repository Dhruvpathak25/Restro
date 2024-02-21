import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';
import {useSelector, useDispatch} from 'react-redux';
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
} from '../Redux/actions/cartActions';
import {store} from '../Redux/store/store';

const MenuScreen = ({route}) => {
  const {restaurant} = route.params;
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch();
  const items = useSelector(state => state?.cart?.items);
  console.log('🚀 ~ MenuScreen ~ items:', items);

  const handleAddItem = (name, price, count) => {
    const {
      cart: {items},
    } = store.getState();
    let tempArr = [...items];
    tempArr.push({name: name, count: count, price: price * count});

    let totalQuantity = tempArr.reduce((total, item) => total + item.count, 0);
    let totalPrice = tempArr.reduce((total, item) => total + item.price, 0);

    console.log('🚀 ~ handleAddItem ~ tempArr:', tempArr);

    dispatch(addItem(tempArr));
  };

  const handleIncrement = (name, price, count) => {
    const {
      cart: {items},
    } = store.getState();
    let tempArr = [...items];
    const findIndex = tempArr.findIndex(item => item.name === name);
    if (findIndex !== -1) {
      tempArr[findIndex] = {
        ...tempArr[findIndex],
        count: tempArr[findIndex].count + 1,
        price: price * (tempArr[findIndex].count + 1),
      };
    }

    let totalQuantity = tempArr.reduce((total, item) => total + item.count, 0);
    let totalPrice = tempArr.reduce((total, item) => total + item.price, 0);

    console.log('🚀 ~ handleIncrement ~ tempArr:', tempArr);

    dispatch(addItem(tempArr));
  };

  const handleDecrement = (name, price, count) => {
    const {
      cart: {items},
    } = store.getState();
    let tempArr = [...items];
    const findIndex = tempArr.findIndex(item => item.name === name);
    if (findIndex !== -1 && tempArr[findIndex].count > 0) {
      tempArr[findIndex] = {
        ...tempArr[findIndex],
        count: tempArr[findIndex].count - 1,
        price: price * (tempArr[findIndex].count - 1),
      };
    }

    let totalQuantity = tempArr.reduce((total, item) => total + item.count, 0);
    let totalPrice = tempArr.reduce((total, item) => total + item.price, 0);

    console.log('🚀 ~ handleDecrement ~ tempArr:', tempArr);

    dispatch(addItem(tempArr));
  };

  const orangebox = () => {
    const {
      cart: {items},
    } = store.getState();

    let totalCount = 0;
    let totalPrice = 0;

    if (typeof items != 'undefined' || items != '') {
      items.forEach(sublist => {
        sublist.forEach(item => {
          totalCount += item.count;
          totalPrice += item.price;
        });
      });
    }

    if (totalCount > 0) {
      return (
        <View style={styles.totalBox}>
          <View style={styles.continueContainer}>
            <Text style={styles.continue}>Continue</Text>
          </View>
          <View style={styles.quantityPriceContainer}>
            <Text style={styles.quantity}>{totalCount} item</Text>
            <Text style={styles.price}>₹{totalPrice}</Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };
  const menuItems = {
    'Main Course': [
      {
        name: 'Chicken Curry',
        description: 'Spicy chicken curry served with rice.',
        price: 120,
        rating: 4,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg',
      },
      {
        name: 'Vegetable Stir Fry',
        description: 'Fresh vegetables stir-fried with sauce.',
        price: 100,
        rating: 3.5,
        image:
          'https://b3067249.smushcdn.com/3067249/wp-content/uploads/2021/08/Asian-stirfried-vegetables.jpg?lossy=0&strip=1&webp=1',
      },
    ],
    Snacks: [
      {
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes.',
        price: 150,
        rating: 4.2,
        image:
          'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800',
      },
      {
        name: 'Chicken Wings',
        description: 'Fried chicken wings with BBQ sauce.',
        price: 300,
        rating: 4.5,
        image:
          'https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg',
      },
    ],
    Combos: [
      {
        name: 'Burger + Coke',
        description: 'Crispy pastry filled with spiced potatoes.',
        price: 505,
        rating: 4.2,
        image:
          'https://www.jumboking.co.in/wp-content/uploads/2023/01/Zomato_Big-Crunch-Burger-Coke.jpg',
      },
      {
        name: 'Burger + Coke + Chicken Wings',
        description: 'Fried chicken wings with BBQ sauce.',
        price: 808,
        rating: 4.5,
        image:
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6bcb6fb8f73a19b507e73552ad3bfaac',
      },
    ],
    Roti: [
      {
        name: 'Chapati',
        description: 'Crispy pastry filled with spiced potatoes.',
        price: 50,
        rating: 4.2,
        image:
          'https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900',
      },
      {
        name: 'Naan(Butter)',
        description: 'Fried chicken wings with BBQ sauce.',
        price: 70,
        rating: 4.5,
        image: 'https://static.toiimg.com/photo/53338316.cms',
      },
    ],
    Rice: [
      {
        name: 'Plain Rice',
        description: 'Crispy pastry filled with spiced potatoes.',
        price: 500,
        rating: 5,
        image:
          'https://vaya.in/recipes/wp-content/uploads/2019/01/Jeera-Rice.jpg',
      },
      {
        name: 'Chicken Fried Rice',
        description: 'Fried chicken wings with BBQ sauce.',
        price: 808,
        rating: 4.5,
        image:
          'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg',
      },
    ],
    Sweets: [
      {
        name: 'Gulab Jamun',
        description: 'Crispy pastry filled with spiced potatoes.',
        price: 250,
        rating: 4.2,
        image:
          'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800',
      },
      {
        name: 'Cake',
        description: 'Fried chicken wings with BBQ sauce.',
        price: 700,
        rating: 4.5,
        image:
          'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg',
      },
    ],
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: restaurant.image}} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.backButton, styles.topButton]}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.shareButton, styles.topButton]}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.heartButton, styles.topButton]}>
          <Text style={styles.heartText}>❤️</Text>
        </TouchableOpacity>
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{restaurant.cookingTime}</Text>
          <Text style={styles.overlayText}>{restaurant.distance}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameAndRating}>
            <View style={styles.nameAndType}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.foodType}>{restaurant.foodType}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>
                {'\u2B50'} {restaurant.rating}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.buttonScroll}>
              <TouchableOpacity style={[styles.button, styles.deliveryButton]}>
                <Text style={styles.buttonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.pickupButton]}>
                <Text style={styles.buttonText}>Pickup</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.dineInButton]}>
                <Text style={styles.buttonText}>Dine-in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.experienceButton]}>
                <Text style={styles.buttonText}>Experience</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Gourmet and Dishes"
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity style={styles.dietaryButton}>
              <Text style={styles.dietaryButtonText}>Dietary</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === 'All' ? styles.selectedCategory : null,
              ]}
              onPress={() => handleCategorySelect('All')}>
              <Text style={styles.categoryButtonText}>All</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            {['Main Course', 'Snacks', 'Combos', 'Roti', 'Rice', 'Sweets'].map(
              category => (
                <View key={category}>
                  <TouchableOpacity
                    style={[
                      styles.categoryButton,
                      selectedCategory === category
                        ? styles.selectedCategory
                        : null,
                    ]}
                    onPress={() => handleCategorySelect(category)}>
                    <Text style={styles.categoryButtonText}>{category}</Text>
                  </TouchableOpacity>
                  <View style={styles.separator} />
                </View>
              ),
            )}
          </ScrollView>
          <View style={styles.categoryTitlesContainer}>
            {Object.entries(menuItems).map(
              ([category, items]) =>
                (selectedCategory === 'All' ||
                  selectedCategory === category) && (
                  <View key={category}>
                    <TouchableOpacity style={styles.categoryTitleButton}>
                      <Text style={styles.categoryTitle}>{category}</Text>
                    </TouchableOpacity>
                    {items &&
                      items.map((menuItem, index) => (
                        <MenuItem
                          key={index}
                          item={menuItem}
                          handleAddItem={handleAddItem}
                          handleIncrement={handleIncrement}
                          handleDecrement={handleDecrement}
                        />
                      ))}
                  </View>
                ),
            )}
          </View>
        </View>
      </ScrollView>
      <View>{orangebox()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  topButton: {
    top: 50,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: 'white',
  },
  shareButton: {
    position: 'absolute',
    right: 70,
  },
  shareText: {
    fontSize: 16,
    color: 'white',
  },
  heartButton: {
    position: 'absolute',
    right: 20,
  },
  heartText: {
    fontSize: 16,
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 220,
    right: 10,
    width: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  overlayText: {
    fontSize: 12,
    color: 'black',
  },
  infoContainer: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 20,
  },
  nameAndRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nameAndType: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  foodType: {
    fontSize: 16,
    marginTop: 5,
  },
  ratingContainer: {
    backgroundColor: '#f56826',
    paddingHorizontal: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  buttonScroll: {
    paddingRight: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f56826',
  },
  deliveryButton: {
    backgroundColor: 'transparent',
    borderColor: '#f56826',
  },
  pickupButton: {
    backgroundColor: 'transparent',
    borderColor: '#f56826',
  },
  dineInButton: {
    backgroundColor: 'transparent',
    borderColor: '#f56826',
  },
  experienceButton: {
    backgroundColor: 'transparent',
    borderColor: '#f56826',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    color: '#000',
  },
  dietaryButton: {
    backgroundColor: '#000',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  dietaryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  allCategoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  selectedCategory: {
    borderBlockColor: '#F56826',
    color: '#F56826',
  },
  categoryButtonText: {
    fontSize: 16,
  },
  categoryTitlesContainer: {
    paddingHorizontal: 0,
    marginTop: 10,
  },
  categoryTitleButton: {
    width: '98%',
    paddingVertical: 10,
    marginBottom: 5,

    borderRadius: 5,
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  totalBox: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#F56826',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#F56826',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueContainer: {flex: 1},
  continue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityPriceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
