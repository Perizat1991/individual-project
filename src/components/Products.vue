<template>
	<section class="content_prod">
		<h1 class="prodTitle">Выберите свой идеальный лук</h1>
			<div class="grid">
				<figure class="effect-sadie">
					<img src="../pics/night-look/4-night.jpg"/>
					<figcaption>
						<h2><span>Вечерние </span> луки</h2>
						<p>Выберите прекрасный вечерний образ</p>
						<router-link to="/woman">View more</router-link>
					</figcaption>			
				</figure>
				<figure class="effect-sadie">
					<img src="../pics/man/2-man.jpg"/>
					<figcaption>
						<h2><span>Офисные </span> луки</h2>
						<p>Офисная одежда может быть гораздо интереснее чем кажется</p>
						<router-link to="#">View more</router-link>
					</figcaption>			
				</figure>
			</div> 
			<div class="grid">
				<figure class="effect-sadie">
					<img src="../pics/everyday-look/2-street.jpg"/>
					<figcaption>
						<h2><span>Street Style </span> луки</h2>
						<p>Универсальный образ на каждый день в любую погоду</p>
						<router-link to="#">View more</router-link>
					</figcaption>			
				</figure>
				<figure class="effect-sadie">
					<img src="../pics/sport-look/1-sport.jpg"/>
					<figcaption>
						<h2><span>Спортивные </span> луки </h2>
						<p>Выглядеть спортивно и стильно легко, загляни сюда</p>
						<router-link to="#">View more</router-link>
					</figcaption>			
				</figure>
			</div>
			<div class="grid">
				<figure class="effect-sadie">
					<img src="../pics/spring-summer/1-summer.jpg"/>
					<figcaption>
						<h2><span>Весна-</span>Лето</h2>
						<p>Пора радовать себя яркими красками</p>
						<router-link to="#">View more</router-link>
					</figcaption>			
				</figure>
				<figure class="effect-sadie">
					<img src="../pics/autumn-winter/2-autm.jpg"/>
					<figcaption>
						<h2><span>Осень-</span>Зима</h2>
						<p>Холод не препядствие стильному образу</p>
						<router-link to="#">View more</router-link>
					</figcaption>			
				</figure>
			</div>
	</section>
</template>

<script>

export default {
	name: 'products',
}
</script>

<style>
.prodTitle {
	text-align: center;
	margin-top: 30px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700
}
.grid {
	position: relative;
	margin: 0 auto;
	padding: 1em 0 4em;
	max-width: 1000px;
	list-style: none;
	text-align: center;
}

/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 20px 1%;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 100%;
	background: #3085a3;
	text-align: center;
	cursor: pointer;

}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 10;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h2 {
	word-spacing: -0.15em;
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

.grid figure h2,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}



/*---------------*/
/***** Sadie *****/
/*---------------*/

figure.effect-sadie figcaption::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: -webkit-linear-gradient(top, rgba(57, 62, 90, 0) 0%, rgba(72,76,97,0.8) 75%);
	background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	content: '';
	opacity: 0;
	-webkit-transform: translate3d(0,50%,0);
	transform: translate3d(0,50%,0);
}

figure.effect-sadie h2 {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	color: pink;
	-webkit-transition: -webkit-transform 0.35s, color 0.35s;
	transition: transform 0.35s, color 0.35s;
	-webkit-transform: translate3d(0,-50%,0);
	transform: translate3d(0,-50%,0);
	font-family: 'Montserrat', sans-serif;
}

figure.effect-sadie figcaption::before,
figure.effect-sadie p {
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	opacity: 0;
	-webkit-transform: translate3d(0,10px,0);
	transform: translate3d(0,10px,0);
	
}

figure.effect-sadie:hover h2 {
	color: palevioletred;
	-webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
	transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
	font-family: 'Montserrat', sans-serif;
	font-family: 'Montserrat', sans-serif;
}

figure.effect-sadie:hover figcaption::before ,
figure.effect-sadie:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
	font-family: 'Montserrat', sans-serif;
}
</style>
