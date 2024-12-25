# Proyecto de Gestión de Clientes

Este proyecto es una aplicación de gestión de clientes con una interfaz frontend en React y un backend en Express. Vas a poder gestionar información de clientes como su nombre, correo electrónico, género y más.

## Tecnologías utilizadas

- **Frontend:**
  - **React**: Para la construcción del front-end.
  - **Tailwind CSS**: Para el diseño y la maquetación del front-end.
  - **Axios**: Para realizar las solicitudes HTTP a la API.
  - **React Hot Toast**: Para mostrar las notificaciones en la interfaz de usuario.
  - **Vite**: Como herramienta de construcción para el desarrollo rápido de React.

- **Backend:**
  - **Express**: Para la API RESTful en el back-end.
  - **JSON:** Para almacenar los datos de los clientes.

## Requisitos previos

Para ejecutar este proyecto, necesitas tener **Node.js** instalado en tu máquina. En caso de que no lo tengas, deberás seguir los siguientes pasos para instalarlo según tu sistema operativo:

### Instalación de Node.js

#### Linux
1. Abre una terminal.
2. Actualiza los paquetes de tu sistema:
   ```bash
   sudo apt update
   ```
3. Instala Node.js:
   ```bash
   sudo apt install nodejs
   ```
4. Verifica la instalación:
   ```bash
   node -v
   npm -v
   ```

#### macOS
1. Abre una terminal.
2. Si tienes **Homebrew** instalado, puedes instalar Node.js con el siguiente comando:
   ```bash
   brew install node
   ```
3. Verifica la instalación:
   ```bash
   node -v
   npm -v
   ```

#### Windows
1. Ve a la página oficial de [Node.js](https://nodejs.org/en/download/).
2. Descarga el instalador para Windows.
3. Ejecuta el instalador y sigue las instrucciones.
4. Verifica la instalación en una terminal:
   ```bash
   node -v
   npm -v
   ```

## Instalación de dependencias

Una vez que hayas instalado Node.js, deberás clonar este repositorio y navegar a la carpeta raíz del proyecto en tu terminal.

**Aclaración:** Para clonar el proyecto es necesario que ejecutes en siguiente comando en tu terminal o consola de git:

```bash
git clone https://github.com/brunochavetta/customer_management_project.git
```

Ejecuta el siguiente comando, en la carpeta raíz del proyecto, para instalar todas las dependencias necesarias:

```bash
npm install
```

## Ejecución del proyecto

### Backend (Servidor Express)

1. Navega a la carpeta `src/services` donde está el archivo `server.js`.
2. Ejecuta el siguiente comando para iniciar el servidor:

   ```bash
   node server.js
   ```

El servidor va a estar disponible disponible en `http://localhost:5000`.

### Frontend (React)

1. Una vez que esté corriendo el Backend, navega a la raíz del proyecto donde está el archivo `package.json`.
2. Compila los archivos del proyecto con el siguiente comando:

   ```bash
   npm run build
   ```

3. Luego, para previsualizar la aplicación, ejecuta:

   ```bash
   npm run preview
   ```

La aplicación estará disponible en `http://localhost:4173` por defecto o podrás visualizar en la terminal el puerto correcto.

## Estructura del proyecto

```
├── package.json          # Archivo de configuración de dependencias
├── .gitignore            # Archivos y carpetas ignoradas por Git
├── index.html            # HTML principal del proyecto
├── eslint.config.js      # Configuración de ESLint 
├── postcss.config.js     # Configuración de PostCSS
├── src                   # Carpeta principal del código fuente
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── components        # Carpeta que contiene los componentes de la UI
|       ├── CustomerTable # Carpeta del componente de tabla para mostrar clientes
|           └── Index.jsx # Componente que renderiza la tabla de clientes y su lógica
|       ├── Table         # Carpeta que contiene componentes relacionados a la tabla
|           ├── Pagination.jsx 
|           ├── TableFilters.jsx 
|           ├── TableHeaders.jsx 
|           └── TableRow.jsx
|       └── CustomerForm  # Componente del formulario para crear y editar clientes 
│   ├── data.json         # Datos de ejemplo para los clientes
│   ├── hooks             # Hooks personalizados
|       ├── useTableFilter.js
|       ├── useTablePagination.js
|       └── useTableSort.js
│   ├── index.css         # Estilos principales
│   ├── main.jsx          # Archivo de entrada de React
│   ├── services          # Archivos relacionados al backend y API
|       ├── api.js        # Archivo encargado de realizar las peticiones HTTP
|       └── server.js     # Archivo que contiene el servidor Express (Backend)
│   └── types             # Estructuras base de un customer
|       └── Customer.js
├── tailwind.config.js    # Configuración de Tailwind CSS
└── vite.config.js        # Configuración de Vite
```

## Contribuciones

Si deseas contribuir al proyecto, haz un fork del repositorio, realiza los cambios y envía un pull request.

## Licencia

Este proyecto es de uso personal y no tiene licencia definida por ahora.