# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> Homepage Takeover Video Spotify <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Formato Homepage Takeover Video para Spotify utilizando workspaces de Sizmek.

## Descripción

El formato Homepage Takeover Video de Spotify consta de dos partes, una imagen estatica que se sirve a traves del soporte y un redirect de 800x235. Puedes ver un ejemplo y las especificaciones del formato en la [web de Spotify ](https://spotifyforbrands.com/es/format/homepage-takeover/).

En el 800x235 se pueden incluir animaciones o cualquier elemento interactivo. Esta plantilla esta preparada para poder incluir solamente un video con un aspect ratio de 16:9 en formato WEBM pero se puede utilizar como base para todo tipo de animaciones y funcionalidades.

## Configuración 

Reemplaza el video de la plantilla de la carpeta 'videos/video.webm' por tu video. Recuerda que es muy importante que el formato de video sea WEBM u OGV, Spotify no acepta MP4. La plantilla incluye las clases 'left', 'right' y 'centered' en su CSS para que puedas posicionar el video facilmente cambiando la clase del contenedor de video en el fichero index.html

```html
<div class="video-container left">
	<button id="audioButton" class="playerButton"></button>
	<button id="controlButton" class="playerButton"></button>
	<button id="videoClickBtn"></button>
	<video id="video" muted playsinline webkit-playsinline poster="images/poster.jpg">
		<source src="videos/video.webm" type="video/webm">
	</video>
</div>	
```

La plantilla incluye una imagen de poster para el video, reemplázala tambien por una imagen de la campaña y crea una imagen de backup de menos de 200Kb como la incluida en la plantilla(800x235px).

Cuando tengas terminada la creatividad, sube la pieza a la plataforma. En este caso, el formato que debes seleccionar en la plataforma es **HTML5 POLITE BANNER**. ¿No tienes claro cómo? Puedes seguir esta pequeña guia [Subir Creatividades Sizmek](http://www.sizmek.es/wiki/subir-creatividades-html5/).

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

*** 