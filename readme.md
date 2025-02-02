# E-Commerce App - React Native

Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades Principales

### Pantalla de Cuenta

- **Acceso seguro:** Solo los usuarios autenticados pueden acceder a la pantalla de perfil y realizar compras.
- **Información del usuario:** Muestra detalles del usuario, como nombre y dirección.

<img src="./assets/img/registrarme.jpg" width="300" >
<img src="./assets/img/login.jpg" width="300" >

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías

- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

<img src="./assets/img/home.jpg" width="200" >

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

<img src="./assets/img/productos.jpg" width="200" >

### Pantalla de Detalles del Producto

- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite selecionar la cantidad se desa agregar.
- Permite agregar el producto al carrito.

<img src="./assets/img/detallesproducto.jpg" width="200" >


### Pantalla de Carrito

- Muestra los productos selecionados a comprar del usuario.
- Muestra el monto a pagar.
- Permite finalizar la compra.

<img src="./assets/img/carrito.jpg" width="200" >


### Pantalla de Ordenes

- Muestra las ordenes que realizo el usuario.

<img src="./assets/img/ordenes.jpg" width="200" >


### Pantalla de Usuario

- Permite al usuario colocar imagen de perfil.
- Permite al usuario colocar localizacion.

<img src="./assets/img/datosusuario.jpg" width="200" >


### Navegación Inferior


```javascript
        const TabNavigator = () => {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelPosition: "beside-icon"
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopSTack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Tienda" icon="shopping-bag" focused={focused} />
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Carrito" icon="shopping-cart" focused={focused} />
                }}
            />
            <Tab.Screen
                name="OrdersStack"
                component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Ordenes" icon="list" focused={focused} />
                }}
            />
            <Tab.Screen
                name="MyProfileStack"
                component={MyProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Perfil" icon="supervised-user-circle" focused={focused} />
                }}
            />

        </Tab.Navigator>
    )
}

```

- **Pestaña 1 - Productos:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

