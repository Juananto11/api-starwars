'use strict';var spinner=document.getElementById('spinner');var header=document.getElementById('header');var menu=document.getElementById('menu');var title=document.getElementById('title');var nav=document.getElementById('nav');var closeMenu=document.getElementById('closeMenu');var paths=['index','people','planets','films','species','vehicles','starships'];var images={people:['./dist/img/people/luke.jpg','./dist/img/people/c3po.jpg','./dist/img/people/r2d2.ico','./dist/img/people/darth.jpeg','./dist/img/people/leia.jpg','./dist/img/people/owen.jpg','./dist/img/people/beru.jpg','./dist/img/people/r5d5.jpg','./dist/img/people/biggs.jpg','./dist/img/people/obi.jpg'],films:['./dist/img/films/4.jpg','./dist/img/films/2.jpg','./dist/img/films/1.jpg','./dist/img/films/3.jpg','./dist/img/films/6.jpg','./dist/img/films/5.jpg','./dist/img/films/7.jpg'],planets:['./dist/img/planets/alderaan.jpg','./dist/img/planets/yavin.jpg','./dist/img/planets/hoth.jpg','./dist/img/planets/dagobah.jpg','./dist/img/planets/bespin.jpg','./dist/img/planets/endor.jpg','./dist/img/planets/naboo.jpg','./dist/img/planets/coruscant.jpg','./dist/img/planets/kamino.jpg','./dist/img/planets/geonosis.jpg'],species:['./dist/img/species/hutt.jpg','./dist/img/species/yoda.jpg','./dist/img/species/trandoshan.jpg','./dist/img/species/mon.jpg','./dist/img/species/ewok.jpg','./dist/img/species/sullustan.jpg','./dist/img/species/neimodian.jpg','./dist/img/species/gungan.jpg','./dist/img/species/toydarian.jpg','./dist/img/species/dug.jpg'],starships:['./dist/img/starships/executor.jpg','./dist/img/starships/sentinel.jpg','./dist/img/starships/death.jpg','./dist/img/starships/millennium.jpg','./dist/img/starships/y-wing.jpg','./dist/img/starships/x-wing.jpg','./dist/img/starships/tie-advance.jpg','./dist/img/starships/slave.ico','./dist/img/starships/imperial.jpg','./dist/img/starships/ef76.jpg'],vehicles:['./dist/img/vehicles/sand.jpg','./dist/img/vehicles/t-16.jpg','./dist/img/vehicles/x-34.jpg','./dist/img/vehicles/tie-ln.jpg','./dist/img/vehicles/snowspeeder.jpg','./dist/img/vehicles/tie-bomber.png','./dist/img/vehicles/at-at.jpg','./dist/img/vehicles/at-st.jpg','./dist/img/vehicles/storm.jpg','./dist/img/vehicles/sail.jpg']};var buttons=[];var containers=[];var selects=[];var a=void 0;var b=void 0;paths.forEach(function(path){buttons.push(document.getElementById(path));containers.push(document.getElementById('container-'+path));selects.push(document.getElementById('select-'+path))});// En github pages
if(window.location.origin==='https://juananto11.github.io/api-starwars'&&!paths.includes(window.location.search.replace('?',''))){window.location.href='https://juananto11.github.io/api-starwars/?index'}// En desarrollo
if(window.location.origin==='http://localhost:3000'&&!paths.includes(window.location.search.replace('?',''))){window.location.href='http://localhost:3000/?index'}var showPage=function showPage(page){nav.classList.remove('nav-expand');menu.classList.remove('arrow');spinner.classList.remove('spinner--hidden');setTimeout(function(){window.location.search='?'+page},500)};var toggleMenu=function toggleMenu(){menu.classList.toggle('arrow');nav.classList.toggle('nav-expand')};var drawResponse=function drawResponse(response,container){var div=document.createElement('div');div.classList.add('cards-container');response.forEach(function(res,index){switch(window.location.search){case'?people':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Genero: <span class="card__text--black">'+res.gender.toLowerCase()+'</span></p>\n            <p class="card__text">Nacimiento: <span class="card__text--black">'+res.birth_year.toLowerCase()+'</span></p>\n            <p class="card__text">Estatura: <span class="card__text--black">'+res.height.toLowerCase()+'</span></p>\n            <p class="card__text">Peso: <span class="card__text--black">'+res.mass.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?planets':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Diametro: <span class="card__text--black">'+res.diameter.toLowerCase()+'</span></p>\n            <p class="card__text">Clima: <span class="card__text--black">'+res.climate.toLowerCase()+'</span></p>\n            <p class="card__text">Gravedad: <span class="card__text--black">'+res.gravity.toLowerCase()+'</span></p>\n            <p class="card__text">Poblaci\xF3n: <span class="card__text--black">'+res.population.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?films':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="episodio_'+res.episode_id+'">\n            <h4 class="card__title">'+res.title.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Episodio: <span class="card__text--black">'+res.episode_id+'</span></p>\n            <p class="card__text">Director: <span class="card__text--black">'+res.director.toLowerCase()+'</span></p>\n            <p class="card__text">Productor: <span class="card__text--black">'+res.producer.toLowerCase()+'</span></p>\n            <p class="card__text">Lanzamiento: <span class="card__text--black">'+res.release_date.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?species':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Clasificaci\xF3n: <span class="card__text--black">'+res.classification.toLowerCase()+'</span></p>\n            <p class="card__text">Designaci\xF3n: <span class="card__text--black">'+res.designation.toLowerCase()+'</span></p>\n            <p class="card__text">Lenguaje: <span class="card__text--black">'+res.language.toLowerCase()+'</span></p>\n            <p class="card__text">Planeta: <span class="card__text--black">'+res.homeworld.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?vehicles':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Modelo: <span class="card__text--black">'+res.model.toLowerCase()+'</span></p>\n            <p class="card__text">Fabricante: <span class="card__text--black">'+res.manufacturer.toLowerCase()+'</span></p>\n            <p class="card__text">Capacidad: <span class="card__text--black">'+res.cargo_capacity.toLowerCase()+'</span></p>\n            <p class="card__text">Pasajeros: <span class="card__text--black">'+res.passengers.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?starships':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Modelo: <span class="card__text--black">'+res.model.toLowerCase()+'</span></p>\n            <p class="card__text">Tipo: <span class="card__text--black">'+res.starship_class.toLowerCase()+'</span></p>\n            <p class="card__text">Fabricante: <span class="card__text--black">'+res.manufacturer.toLowerCase()+'</span></p>\n            <p class="card__text">Pasajeros: <span class="card__text--black">'+res.passengers.toLowerCase()+'</span></p>\n          </div>\n        ');break;}});document.getElementById('container-cards-'+container).appendChild(div);var spinner=document.getElementById('spinner');setTimeout(function(){spinner.classList.add('spinner--hidden')},500)};var request=function request(endPoint){fetch('https://swapi.co/api/'+endPoint).then(function(res){switch(res.status){case 200:return res.json();default:console.log('error');break;}}).then(function(json){return drawResponse(json.results,endPoint)}).catch(function(error){return console.log(error)})};var showData=function showData(endPoint){containers.forEach(function(container,index){if(container.id.includes(window.location.search.replace('?',''))){container.classList.remove('invisible')}if(buttons[index].id===window.location.search.replace('?','')){buttons[index].classList.add('nav__item--black')}});if(window.location.search!=='?index'){request(endPoint)}else{var _spinner=document.getElementById('spinner');setTimeout(function(){_spinner.classList.add('spinner--hidden')},500)}};var selectCharacter=function selectCharacter(e){var cards=document.querySelectorAll('.card');cards.forEach(function(card){card.classList.remove('invisible');if(e.target.value==='all'){card.classList.remove('invisible')}else if(e.target.value!==card.id){card.classList.add('invisible')}})};title.addEventListener('click',function(){window.location.search='index'});menu.addEventListener('click',toggleMenu);closeMenu.addEventListener('click',toggleMenu);buttons.forEach(function(button,index){button.addEventListener('click',function(){return showPage(paths[index])})});selects.forEach(function(select){if(select)select.addEventListener('change',function(e){return selectCharacter(e)})});window.addEventListener('DOMContentLoaded',function(){return showData(window.location.search.replace('?',''))});window.addEventListener('resize',function(){if(window.matchMedia('(min-width: 767px)').matches){menu.classList.remove('arrow');nav.classList.remove('nav-expand')}});window.addEventListener('touchmove',function(e){if(Array.from(nav.classList).includes('nav-expand'))document.body.style.overflow='hidden';if(!Array.from(nav.classList).includes('nav-expand'))document.body.style.overflow='scroll';a=document.documentElement.scrollTop});window.addEventListener('mousewheel',function(e){Array.from(nav.classList).includes('nav-expand')&&e.preventDefault();a=document.documentElement.scrollTop});window.addEventListener('scroll',function(e){b=document.documentElement.scrollTop;if(a<b)header.style.top='-71px';if(a>b)header.style.top='0'});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3Bpbm5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXIiLCJtZW51IiwidGl0bGUiLCJuYXYiLCJjbG9zZU1lbnUiLCJwYXRocyIsImltYWdlcyIsInBlb3BsZSIsImZpbG1zIiwicGxhbmV0cyIsInNwZWNpZXMiLCJzdGFyc2hpcHMiLCJ2ZWhpY2xlcyIsImJ1dHRvbnMiLCJjb250YWluZXJzIiwic2VsZWN0cyIsImEiLCJiIiwiZm9yRWFjaCIsInB1c2giLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlcGxhY2UiLCJocmVmIiwic2hvd1BhZ2UiLCJwYWdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGltZW91dCIsInRvZ2dsZU1lbnUiLCJ0b2dnbGUiLCJkcmF3UmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnRhaW5lciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJyZXMiLCJpbmRleCIsImluc2VydEFkamFjZW50SFRNTCIsIm5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiZ2VuZGVyIiwiYmlydGhfeWVhciIsImhlaWdodCIsIm1hc3MiLCJkaWFtZXRlciIsImNsaW1hdGUiLCJncmF2aXR5IiwicG9wdWxhdGlvbiIsImVwaXNvZGVfaWQiLCJkaXJlY3RvciIsInByb2R1Y2VyIiwicmVsZWFzZV9kYXRlIiwiY2xhc3NpZmljYXRpb24iLCJkZXNpZ25hdGlvbiIsImxhbmd1YWdlIiwiaG9tZXdvcmxkIiwibW9kZWwiLCJtYW51ZmFjdHVyZXIiLCJjYXJnb19jYXBhY2l0eSIsInBhc3NlbmdlcnMiLCJzdGFyc2hpcF9jbGFzcyIsImFwcGVuZENoaWxkIiwicmVxdWVzdCIsImVuZFBvaW50IiwiZmV0Y2giLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiY2F0Y2giLCJlcnJvciIsInNob3dEYXRhIiwiaWQiLCJzZWxlY3RDaGFyYWN0ZXIiLCJlIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZCIsInRhcmdldCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbiIsInNlbGVjdCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiQXJyYXkiLCJmcm9tIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwcmV2ZW50RGVmYXVsdCIsInRvcCJdLCJtYXBwaW5ncyI6ImFBQUEsR0FBTUEsU0FBVUMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQUFoQixDQUNBLEdBQU1DLFFBQVNGLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZixDQUNBLEdBQU1FLE1BQU9ILFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYixDQUNBLEdBQU1HLE9BQVFKLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZCxDQUNBLEdBQU1JLEtBQU1MLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWixDQUNBLEdBQU1LLFdBQVlOLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEIsQ0FDQSxHQUFNTSxPQUFRLENBQ1osT0FEWSxDQUVaLFFBRlksQ0FHWixTQUhZLENBSVosT0FKWSxDQUtaLFNBTFksQ0FNWixVQU5ZLENBT1osV0FQWSxDQUFkLENBU0EsR0FBTUMsUUFBUyxDQUNiQyxPQUFRLENBQ04sNEJBRE0sQ0FFTiw0QkFGTSxDQUdOLDRCQUhNLENBSU4sOEJBSk0sQ0FLTiw0QkFMTSxDQU1OLDRCQU5NLENBT04sNEJBUE0sQ0FRTiw0QkFSTSxDQVNOLDZCQVRNLENBVU4sMkJBVk0sQ0FESyxDQWFiQyxNQUFPLENBQ0wsd0JBREssQ0FFTCx3QkFGSyxDQUdMLHdCQUhLLENBSUwsd0JBSkssQ0FLTCx3QkFMSyxDQU1MLHdCQU5LLENBT0wsd0JBUEssQ0FiTSxDQXNCYkMsUUFBUyxDQUNQLGlDQURPLENBRVAsOEJBRk8sQ0FHUCw2QkFITyxD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V0FBeEIsQ0FBcUMsU0FBQ04sQ0FBRCxDQUFPLENBQzFDLEdBQUlXLE1BQU1DLElBQU4sQ0FBVzVGLElBQUkyQixTQUFmLEVBQTBCTixRQUExQixDQUFtQyxZQUFuQyxDQUFKLENBQXNEMUIsU0FBU2tHLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsQ0FBK0IsUUFBL0IsQ0FDdEQsR0FBSSxDQUFDSixNQUFNQyxJQUFOLENBQVc1RixJQUFJMkIsU0FBZixFQUEwQk4sUUFBMUIsQ0FBbUMsWUFBbkMsQ0FBTCxDQUF1RDFCLFNBQVNrRyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLENBQStCLFFBQS9CLENBQ3ZEbEYsRUFBSWxCLFNBQVNxRyxlQUFULENBQXlCQyxTQUM5QixDQUpELEVBS0EvRSxPQUFPb0UsZ0JBQVAsQ0FBd0IsWUFBeEIsQ0FBc0MsU0FBQ04sQ0FBRCxDQUFPLENBQzNDVyxNQUFNQyxJQUFOLENBQVc1RixJQUFJMkIsU0FBZixFQUEwQk4sUUFBMUIsQ0FBbUMsWUFBbkMsR0FBb0QyRCxFQUFFa0IsY0FBRixFQUFwRCxDQUNBckYsRUFBSWxCLFNBQVNxRyxlQUFULENBQXlCQyxTQUM5QixDQUhELEVBSUEvRSxPQUFPb0UsZ0JBQVAsQ0FBd0IsUUFBeEIsQ0FBa0MsU0FBQ04sQ0FBRCxDQUFPLENBQ3ZDbEUsRUFBSW5CLFNBQVNxRyxlQUFULENBQXlCQyxTQUE3QixDQUNBLEdBQUlwRixFQUFJQyxDQUFSLENBQVdqQixPQUFPaUcsS0FBUCxDQUFhSyxHQUFiLENBQW1CLE9BQW5CLENBQ1gsR0FBSXRGLEVBQUlDLENBQVIsQ0FBV2pCLE9BQU9pRyxLQUFQLENBQWFLLEdBQWIsQ0FBbUIsR0FDL0IsQ0FKRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXHJcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1lbnUnKVxyXG5jb25zdCBwYXRocyA9IFtcclxuICAnaW5kZXgnLFxyXG4gICdwZW9wbGUnLFxyXG4gICdwbGFuZXRzJyxcclxuICAnZmlsbXMnLFxyXG4gICdzcGVjaWVzJyxcclxuICAndmVoaWNsZXMnLFxyXG4gICdzdGFyc2hpcHMnXHJcbl1cclxuY29uc3QgaW1hZ2VzID0ge1xyXG4gIHBlb3BsZTogW1xyXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL2x1a2UuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3Blb3BsZS9jM3BvLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvcjJkMi5pY28nLFxyXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL2RhcnRoLmpwZWcnLFxyXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL2xlaWEuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3Blb3BsZS9vd2VuLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvYmVydS5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL3I1ZDUuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3Blb3BsZS9iaWdncy5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL29iaS5qcGcnXHJcbiAgXSxcclxuICBmaWxtczogW1xyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvNC5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvMi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvMS5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvMy5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvNi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvNS5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvNy5qcGcnXHJcbiAgXSxcclxuICBwbGFuZXRzOiBbXHJcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL2FsZGVyYWFuLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL3lhdmluLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL2hvdGguanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvZGFnb2JhaC5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9iZXNwaW4uanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvZW5kb3IuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvbmFib28uanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvY29ydXNjYW50LmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL2thbWluby5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9nZW9ub3Npcy5qcGcnXHJcbiAgXSxcclxuICBzcGVjaWVzOiBbXHJcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL2h1dHQuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMveW9kYS5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy90cmFuZG9zaGFuLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL21vbi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy9ld29rLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL3N1bGx1c3Rhbi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy9uZWltb2RpYW4uanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMvZ3VuZ2FuLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL3RveWRhcmlhbi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy9kdWcuanBnJ1xyXG4gIF0sXHJcbiAgc3RhcnNoaXBzOiBbXHJcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvZXhlY3V0b3IuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9zZW50aW5lbC5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL2RlYXRoLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvbWlsbGVubml1bS5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL3ktd2luZy5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL3gtd2luZy5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL3RpZS1hZHZhbmNlLmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvc2xhdmUuaWNvJyxcclxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9pbXBlcmlhbC5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL2VmNzYuanBnJ1xyXG4gIF0sXHJcbiAgdmVoaWNsZXM6IFtcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3NhbmQuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3QtMTYuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3gtMzQuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3RpZS1sbi5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvc25vd3NwZWVkZXIuanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3RpZS1ib21iZXIucG5nJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL2F0LWF0LmpwZycsXHJcbiAgICAnLi9kaXN0L2ltZy92ZWhpY2xlcy9hdC1zdC5qcGcnLFxyXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvc3Rvcm0uanBnJyxcclxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3NhaWwuanBnJ1xyXG4gIF1cclxufVxyXG5jb25zdCBidXR0b25zID0gW11cclxuY29uc3QgY29udGFpbmVycyA9IFtdXHJcbmNvbnN0IHNlbGVjdHMgPSBbXVxyXG5cclxubGV0IGFcclxubGV0IGJcclxuXHJcbnBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgYnV0dG9ucy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhdGgpKVxyXG4gIGNvbnRhaW5lcnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyLSR7cGF0aH1gKSlcclxuICBzZWxlY3RzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNlbGVjdC0ke3BhdGh9YCkpXHJcbn0pXHJcblxyXG4vLyBFbiBnaXRodWIgcGFnZXNcclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2p1YW5hbnRvMTEuZ2l0aHViLmlvL2FwaS1zdGFyd2FycycgJiYgIXBhdGhzLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpIHtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2p1YW5hbnRvMTEuZ2l0aHViLmlvL2FwaS1zdGFyd2Fycy8/aW5kZXgnXHJcbn1cclxuXHJcbi8vIEVuIGRlc2Fycm9sbG9cclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnICYmICFwYXRocy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKSB7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLz9pbmRleCdcclxufVxyXG5cclxuY29uc3Qgc2hvd1BhZ2UgPSAocGFnZSkgPT4ge1xyXG4gIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtZXhwYW5kJylcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93JylcclxuICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NwaW5uZXItLWhpZGRlbicpXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uc2VhcmNoID0gYD8ke3BhZ2V9YFxyXG4gIH0sIDUwMClcclxufVxyXG5cclxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Fycm93JylcclxuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWV4cGFuZCcpXHJcbn1cclxuXHJcbmNvbnN0IGRyYXdSZXNwb25zZSA9IChyZXNwb25zZSwgY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJylcclxuXHJcbiAgcmVzcG9uc2UuZm9yRWFjaCgocmVzLCBpbmRleCkgPT4ge1xyXG4gICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgIGNhc2UgJz9wZW9wbGUnOlxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke3Jlcy5uYW1lLnNwbGl0KCcgJylbMF0udG9Mb3dlckNhc2UoKX1cIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZF9fdGl0bGVcIj4ke3Jlcy5uYW1lLnRvTG93ZXJDYXNlKCl9PC9oND5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1tjb250YWluZXJdW2luZGV4XX1cIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPkdlbmVybzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmdlbmRlci50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPk5hY2ltaWVudG86IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5iaXJ0aF95ZWFyLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+RXN0YXR1cmE6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5oZWlnaHQudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5QZXNvOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubWFzcy50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJz9wbGFuZXRzJzpcclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtyZXMubmFtZS5zcGxpdCgnICcpWzBdLnRvTG93ZXJDYXNlKCl9XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtyZXMubmFtZS50b0xvd2VyQ2FzZSgpfTwvaDQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbY29udGFpbmVyXVtpbmRleF19XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5EaWFtZXRybzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmRpYW1ldGVyLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+Q2xpbWE6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5jbGltYXRlLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+R3JhdmVkYWQ6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5ncmF2aXR5LnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UG9ibGFjacOzbjogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLnBvcHVsYXRpb24udG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYClcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICc/ZmlsbXMnOlxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCJlcGlzb2Rpb18ke3Jlcy5lcGlzb2RlX2lkfVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7cmVzLnRpdGxlLnRvTG93ZXJDYXNlKCl9PC9oND5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1tjb250YWluZXJdW2luZGV4XX1cIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPkVwaXNvZGlvOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuZXBpc29kZV9pZH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5EaXJlY3RvcjogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmRpcmVjdG9yLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UHJvZHVjdG9yOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMucHJvZHVjZXIudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5MYW56YW1pZW50bzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLnJlbGVhc2VfZGF0ZS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJz9zcGVjaWVzJzpcclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtyZXMubmFtZS5zcGxpdCgnICcpWzBdLnRvTG93ZXJDYXNlKCl9XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtyZXMubmFtZS50b0xvd2VyQ2FzZSgpfTwvaDQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbY29udGFpbmVyXVtpbmRleF19XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5DbGFzaWZpY2FjacOzbjogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmNsYXNzaWZpY2F0aW9uLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+RGVzaWduYWNpw7NuOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuZGVzaWduYXRpb24udG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5MZW5ndWFqZTogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UGxhbmV0YTogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmhvbWV3b3JsZC50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJz92ZWhpY2xlcyc6XHJcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7cmVzLm5hbWUuc3BsaXQoJyAnKVswXS50b0xvd2VyQ2FzZSgpfVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7cmVzLm5hbWUudG9Mb3dlckNhc2UoKX08L2g0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2NvbnRhaW5lcl1baW5kZXhdfVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+TW9kZWxvOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubW9kZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5GYWJyaWNhbnRlOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubWFudWZhY3R1cmVyLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+Q2FwYWNpZGFkOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuY2FyZ29fY2FwYWNpdHkudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5QYXNhamVyb3M6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5wYXNzZW5nZXJzLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnP3N0YXJzaGlwcyc6XHJcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7cmVzLm5hbWUuc3BsaXQoJyAnKVswXS50b0xvd2VyQ2FzZSgpfVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7cmVzLm5hbWUudG9Mb3dlckNhc2UoKX08L2g0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2NvbnRhaW5lcl1baW5kZXhdfVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+TW9kZWxvOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubW9kZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5UaXBvOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuc3RhcnNoaXBfY2xhc3MudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5GYWJyaWNhbnRlOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubWFudWZhY3R1cmVyLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UGFzYWplcm9zOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMucGFzc2VuZ2Vycy50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfSlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyLWNhcmRzLSR7Y29udGFpbmVyfWApLmFwcGVuZENoaWxkKGRpdilcclxuXHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnc3Bpbm5lci0taGlkZGVuJylcclxuICB9LCA1MDApXHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3QgPSAoZW5kUG9pbnQpID0+IHtcclxuICBmZXRjaChgaHR0cHM6Ly9zd2FwaS5jby9hcGkvJHtlbmRQb2ludH1gKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKGpzb24gPT4gZHJhd1Jlc3BvbnNlKGpzb24ucmVzdWx0cywgZW5kUG9pbnQpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxufVxyXG5cclxuY29uc3Qgc2hvd0RhdGEgPSAoZW5kUG9pbnQpID0+IHtcclxuICBjb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lciwgaW5kZXgpID0+IHtcclxuICAgIGlmIChjb250YWluZXIuaWQuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKSkge1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxuICAgIH1cclxuICAgIGlmIChidXR0b25zW2luZGV4XS5pZCA9PT0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKSB7XHJcbiAgICAgIGJ1dHRvbnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbS0tYmxhY2snKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoICE9PSAnP2luZGV4Jykge1xyXG4gICAgcmVxdWVzdChlbmRQb2ludClcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ3NwaW5uZXItLWhpZGRlbicpXHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzZWxlY3RDaGFyYWN0ZXIgPSAoZSkgPT4ge1xyXG4gIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJylcclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdhbGwnKSB7XHJcbiAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgIT09IGNhcmQuaWQpIHtcclxuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB3aW5kb3cubG9jYXRpb24uc2VhcmNoID0gJ2luZGV4JyB9KVxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSlcclxuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSlcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1BhZ2UocGF0aHNbaW5kZXhdKSlcclxufSlcclxuc2VsZWN0cy5mb3JFYWNoKHNlbGVjdCA9PiB7XHJcbiAgaWYgKHNlbGVjdCkgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiBzZWxlY3RDaGFyYWN0ZXIoZSkpXHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHNob3dEYXRhKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93JylcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtZXhwYW5kJylcclxuICB9XHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xyXG4gIGlmIChBcnJheS5mcm9tKG5hdi5jbGFzc0xpc3QpLmluY2x1ZGVzKCduYXYtZXhwYW5kJykpIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gIGlmICghQXJyYXkuZnJvbShuYXYuY2xhc3NMaXN0KS5pbmNsdWRlcygnbmF2LWV4cGFuZCcpKSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcclxuICBhID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIChlKSA9PiB7XHJcbiAgQXJyYXkuZnJvbShuYXYuY2xhc3NMaXN0KS5pbmNsdWRlcygnbmF2LWV4cGFuZCcpICYmIGUucHJldmVudERlZmF1bHQoKVxyXG4gIGEgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xyXG4gIGIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgaWYgKGEgPCBiKSBoZWFkZXIuc3R5bGUudG9wID0gJy03MXB4J1xyXG4gIGlmIChhID4gYikgaGVhZGVyLnN0eWxlLnRvcCA9ICcwJ1xyXG59KVxyXG4iXX0=
