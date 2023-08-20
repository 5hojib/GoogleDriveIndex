function init() {
	document.siteName = $('title').html();
	var html = `<header>
   <div id="nav">
   </div>
</header>
<div class="loading" id="spinner" style="display:none;">Loading&#8230;</div>
<div>
<div id="content" style="padding-top: ${UI.header_padding}px;${UI.fixed_footer ?' padding-bottom: clamp(170px, 100%, 300px);': ''}">
</div>
<div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="SearchModelLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body" id="modal-body-space">
      </div>
      <div class="modal-footer" id="modal-body-space-buttons">
      </div>
    </div>
  </div>
</div>
<br>
<footer class="footer mt-auto py-3 text-muted ${UI.footer_style_class}" style="${UI.fixed_footer ?'position: fixed; ': ''}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${UI.hide_footer ? ' display:none;': ' display:block;'}"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> ${UI.credit ? '<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>' : ''} <p>© ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>, All Rights Reserved.</p> </div> </footer>
  `;
	$('body').html(html);
}

const folder_icon = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve"><g><g><path d="M372,88.661H206.32l-33-39.24c-0.985-1.184-2.461-1.848-4-1.8H36c-19.956,0.198-36.023,16.443-36,36.4v240 c-0.001,19.941,16.06,36.163,36,36.36h336c19.94-0.197,36.001-16.419,36-36.36v-199C408.001,105.08,391.94,88.859,372,88.661z"/></g></g></svg>`
const video_icon = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 467.968 467.968" style="enable-background:new 0 0 467.968 467.968;" xml:space="preserve"><g><g><path d="M264.704,96.512H51.2c-28.16,0-51.2,23.04-51.2,51.2v172.544c0,28.16,23.04,51.2,51.2,51.2h213.504	c28.16,0,51.2-23.04,51.2-51.2V147.712C315.904,119.04,292.864,96.512,264.704,96.512z"/></g></g><g><g><path d="M430.08,124.672c-3.072,0.512-6.144,2.048-8.704,3.584l-79.872,46.08V293.12l80.384,46.08 c14.848,8.704,33.28,3.584,41.984-11.264c2.56-4.608,4.096-9.728,4.096-15.36V154.368 C467.968,135.424,450.048,120.064,430.08,124.672z"/></g></g></svg>`
const code_icon = `<svg id="Layer_2" enable-background="new 0 0 32 32" height="18" viewBox="0 0 32 32" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m7.3858 24.39282c.36609.40771.89111.64142 1.44025.64142.47913 0 .93939-.17694 1.29553-.49762.7937-.71423.85803-1.94214.1438-2.73676l-5.22046-5.79993 5.22046-5.80078c.71423-.7937.6499-2.02161-.1438-2.73584v-.00097c-.38452-.34619-.88403-.52502-1.3977-.49377-.51746.0274-.99237.25354-1.33808.63757l-6.38739 7.09784c-.66455.73877-.66455 1.85315 0 2.59296z"/><path d="m24.6142 7.60614c-.71417-.79272-1.94067-.85797-2.73578-.14282-.7937.71423-.85803 1.94214-.1438 2.73676l5.22046 5.79987-5.22046 5.80084c-.71423.7937-.6499 2.02161.1438 2.73682.35614.3197.81641.49664 1.29553.49664.54913 0 1.07416-.2337 1.44025-.64044l6.38739-7.09784c.66455-.73883.66455-1.85321 0-2.59198z"/><path d="m19.39423 2.17615-.00189-.00092c-1.03821-.25165-2.08783.3869-2.34131 1.42084l-5.86426 23.88446c-.25494 1.03687.38171 2.08783 1.41992 2.34326.15094.03687.30652.05579.46216.05579.89398 0 1.6673-.60638 1.88013-1.47571l5.86426-23.88446c.25494-1.03687-.38172-2.08783-1.41901-2.34326z"/></svg>`
const zip_icon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m351 8.783v91.217h91.211z"/><path d="m241 395c0 8.271 6.729 15 15 15s15-6.729 15-15v-35h-30z"/><path d="m336 130c-8.284 0-15-6.716-15-15v-115h-50v90h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v30h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v30h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v30h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v30h15c8.284 0 15 6.716 15 15v50c0 24.813-20.187 45-45 45s-45-20.187-45-45v-50c0-8.284 6.716-15 15-15h15v-60h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15h15v-30h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15h15v-30h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15h15v-30h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15h15v-60h-135c-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h300c24.813 0 45-20.187 45-45v-337z"/></svg>`
const image_icon = `<svg id="SVGRoot" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g id="g9679"><path id="path9659" d="m5.5 3c-1.3763472 0-2.5 1.1236528-2.5 2.5v13c0 1.376348 1.1236528 2.5 2.5 2.5h13c1.376348 0 2.5-1.123652 2.5-2.5v-13c0-1.3763472-1.123652-2.5-2.5-2.5zm11.5 2c1.098644 0 2 .9013561 2 2s-.901356 2-2 2-2-.9013561-2-2 .901356-2 2-2zm-6.724609 4c.338209 0 .677037.1574615.871093.4726562l1.947266 3.1660158.767578-1.167969c.192509-.292704.521032-.469603.871094-.470703h.002c.351378-.000142.68177.176901.875.470703l3.228516 4.919922c-.000001.000651-.000001.0013 0 .002.437551.667757-.06924 1.605922-.867188 1.607422-3.973126 0-7.946685 0-11.9199688 0-.802795 0-1.3212228-.929756-.9003906-1.613281l4.2539063-6.9141098c.1940586-.3151947.532882-.4726562.8710941-.4726562z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
const audio_icon = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M64,96c-17.672,0-32,14.326-32,32v256c0,17.672,14.328,32,32,32s32-14.328,32-32V128C96,110.326,81.672,96,64,96z"/><path d="M160,160c-17.672,0-32,14.326-32,32v128c0,17.672,14.328,32,32,32s32-14.328,32-32V192C192,174.326,177.672,160,160,160z"/><path d="M256,0c-17.672,0-32,14.326-32,32v448c0,17.672,14.328,32,32,32s32-14.328,32-32V32C288,14.326,273.672,0,256,0z"/><path d="M352,80c-17.672,0-32,14.326-32,32v288c0,17.672,14.328,32,32,32s32-14.328,32-32V112C384,94.326,369.672,80,352,80z"/><path d="M448,160c-17.672,0-32,14.326-32,32v128c0,17.672,14.328,32,32,32s32-14.328,32-32V192C480,174.326,465.672,160,448,160z"/></g></svg>`
const markdown_icon = `<svg width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M265.61429932 63.6656706h493.57455644c111.51629209 0 201.91670068 90.40220771 201.91670068 201.91580157v493.57545556c0 111.51449297-90.40040859 201.91670068-201.91670068 201.91670069H265.61429932c-111.51539297 0-201.91580068-90.40220771-201.91580069-201.91670069V265.58147217c0-111.51359385 90.40040859-201.91580068 201.91580069-201.91580157z" fill="#707070"></path><path d="M763.60576133 722.16141084L670.49099316 599.42972305h48.19382491V302.57788818h89.84188652v296.85183487h48.19382491L763.60576133 722.16141084zM519.02738545 472.82885791c0-13.71570117 0.30399346-28.21926709 0.91827773-43.48821445l-13.67612753 19.09855107c-0.1726831 0.54323174-0.34626533 1.10265205-0.52074757 1.62609698l-7.15195107 10.50577734-109.52234384 166.63092451-40.52562364-62.91054668h-0.25092949l-28.34248359-44.38850449-41.19926749-63.95563828h0.36425304l-8.60086846-13.47016729-0.46318536-1.8752291-14.42082305-21.30475518c1.05318633 33.22347451 1.60451191 57.42426622 1.60451192 72.50254365v229.53787296h-89.15835059V303.99532753h140.37862325l77.89348828 115.26944679h1.3346956l80.12037832-115.26944678H610.08255019v417.34224141H519.02828457V472.82885791z" fill="#ffffff"></path></svg>`
const pdf_icon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m106 512h300c24.814 0 45-20.186 45-45v-317h-105c-24.814 0-45-20.186-45-45v-105h-195c-24.814 0-45 20.186-45 45v422c0 24.814 20.186 45 45 45zm60-301h180c8.291 0 15 6.709 15 15s-6.709 15-15 15h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h120c8.291 0 15 6.709 15 15s-6.709 15-15 15h-120c-8.291 0-15-6.709-15-15s6.709-15 15-15z"/><path d="m346 120h96.211l-111.211-111.211v96.211c0 8.276 6.724 15 15 15z"/></svg>`
const file_icon = `<svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><rect height="9.5" rx="1.75" width="9.5" x="13.25" y="1.25"/><path d="m22.7334 16.7627-3.4961-3.4961a1.7529 1.7529 0 0 0 -2.4746 0l-3.4961 3.4961a1.752 1.752 0 0 0 0 2.4746l3.4961 3.4961a1.75171 1.75171 0 0 0 2.4746 0l3.4961-3.4961a1.75112 1.75112 0 0 0 0-2.4746z"/><rect height="9.5" rx="1.75" width="9.5" x="1.25" y="1.25"/><rect height="9.5" rx="1.75" width="9.5" x="1.25" y="13.25"/></g></svg>`

// Don't know new OS thing, so I just copied it from the original source code and edited something.
const Os = {
	isWindows: navigator.userAgent.toUpperCase().indexOf('WIN') > -1, // .includes
	isMac: navigator.userAgent.toUpperCase().indexOf('MAC') > -1,
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.userAgent),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

function getDocumentHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}

// get search params
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	var pair;
	for (var i = 0; i < vars.length; i++) {
		pair = vars[i].split('=');
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

function render(path) {
	if (path.indexOf("?") > 0) {
		path = path.substr(0, path.indexOf("?"));
	}
	title(path);
	nav(path);
	// .../0: This
	var reg = /\/\d+:$/g;
	if (path.includes("/fallback")) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		const can_preview = getQueryVariable('a');
		const id = getQueryVariable('id');
		if (can_preview) {
			return fallback(id, true)
		} else {
			return list(null, id, true);
		}
	} else if (window.MODEL.is_search_page) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		render_search_result_list()
	} else if (path.match(reg) || path.slice(-1) == '/') {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		list(path);
	} else {
		file(path);
	}
}


// Render title
function title(path) {
	path = decodeURI(path);
	var cur = window.current_drive_order || 0;
	var drive_name = window.drive_names[cur];
	path = path.replace(`/${cur}:`, '');
	// $('title').html(document.siteName + ' - ' + path);
	var model = window.MODEL;
	if (model.is_search_page)
		$('title').html(`${drive_name} - Search results for ${model.q} `);
	else
		$('title').html(`${drive_name} - ${path}`);
}

// Render the navigation bar
function nav(path) {
	var model = window.MODEL;
	var html = "";
	var cur = window.current_drive_order || 0;
	html += `<nav class="navbar navbar-expand-lg${UI.fixed_header ?' fixed-top': ''} ${UI.header_style_class}">
    <div class="container-fluid">
  <a class="navbar-brand" href="/">${UI.logo_image ? '<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="'+UI.logo_height+'" width="'+UI.logo_width+'">' : UI.logo_link_name}</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="/${cur}:/">${UI.nav_link_1}</a>
      </li>`;
	var names = window.drive_names;
	var drive_name = window.drive_names[cur];

	html += `<li class="nav-item">
    <a class="nav-link" href="${UI.contact_link}" target="_blank">${UI.nav_link_2}</a>
  </li>${UI.show_logout_button ?'<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>': ''}`;

	var search_text = model.is_search_page ? (model.q || '') : '';
	var search_bar = `
</ul>
<form class="d-flex" method="get" action="/${cur}:search">
<input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="${search_text}" required>
<button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>
</form>
</div>
</div>
</nav>
`;

	// Personal or team
	if (model.root_type < 2) {
		// Show search box
		html += search_bar;
	}

	$('#nav').html(html);
}

// Sleep Function to Retry API Calls
function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

/**
 * Initiate POST request for listing
 * @param path Path
 * @param params Form params
 * @param resultCallback Success Result Callback
 * @param authErrorCallback Pass Error Callback
 */
function requestListPath(path, params, resultCallback, authErrorCallback, retries = 3, fallback = false) {
	var requestData = {
		id: params['id'] || '',
		type: 'folder',
		password: params['password'] || '',
		page_token: params['page_token'] || '',
		page_index: params['page_index'] || 0
	};
	if (fallback) {
		path = "/0:fallback"
	}

	function performRequest() {
		fetch(fallback ? "/0:fallback" : path, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestData)
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Request failed');
				}
				return response.json();
			})
			.then(function(res) {
				if (res && res.error && res.error.code === '401') {
					// Password verification failed
					if (authErrorCallback) authErrorCallback(path);
				} else if (res && res.data === null) {
					document.getElementById('spinner').remove();
					document.getElementById('list').innerHTML = `<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>`;
					$('#update').hide();
				} else if (res && res.data) {
					resultCallback(res, path, requestData);
					$('#update').hide();
				}
			})
			.catch(function(error) {
				if (retries > 0) {
					sleep(2000);
					document.getElementById('update').innerHTML = `<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`;
					performRequest(path, requestData, resultCallback, authErrorCallback, retries - 1);
				} else {
					document.getElementById('update').innerHTML = `<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong.</div></div></div>`;
					document.getElementById('list').innerHTML = `<div class='alert alert-danger' role='alert'> We were unable to get data from the server. ` + error + `</div></div></div>`;
					$('#update').hide();
				}
			});
	}
	console.log("Performing Request again")
	performRequest();
}




/**
 * Search POST request
 * @param params Form params
 * @param resultCallback Success callback
 */
function requestSearch(params, resultCallback, retries = 3) {
	var p = {
		q: params['q'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};

	function performRequest(retries) {
		fetch(`/${window.current_drive_order}:search`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(p)
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Request failed');
				}
				return response.json();
			})
			.then(function(res) {
				if (res && res.data === null) {
					$('#spinner').remove();
					$('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>`);
					$('#update').remove();
				}
				if (res && res.data) {
					if (resultCallback) resultCallback(res, p);
					$('#update').remove();
				}
			})
			.catch(function(error) {
				if (retries > 0) {
					sleep(2000);
					$('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
					performRequest(retries - 1);
				} else {
					$('#update').html(`<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong. 3 Failures</div></div></div>`);
					$('#list').html(`<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>`);
					$('#spinner').remove();
				}
			});
	}

	performRequest(retries);
}


// Render file list
function list(path, id = '', fallback = false) {
	console.log(id);
	var containerContent = `<div class="container">${UI.fixed_header ?'<br>': ''}
    <div id="update"></div>
    <div id="head_md" style="display:none; padding: 20px 20px;"></div>
    <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">
      <div class="d-flex align-items-center justify-content-between">
        <div class="form-check mr-3">
          <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">
          <label class="form-check-label" for="select-all-checkboxes">Select all</label>
        </div>
        <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-outline-dark">Copy</button>
      </div>
    </div>
    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;" style="text-decoration: none;">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" id="folderne">
          <li class="breadcrumb-item"><a href="/">Home</a></li>`;

	var navfulllink = window.location.pathname;
	var navarray = navfulllink.trim('/').split('/');
	var currentPath = '/';

	if (navarray.length > 1) {
		for (var i in navarray) {
			var pathPart = navarray[i];
			var decodedPathPart = decodeURIComponent(pathPart).replace(/\//g, '%2F');
			var trimmedPathPart = decodedPathPart.replace(/\?.+/g, "$'");

			var displayedPathPart = trimmedPathPart.length > 15 ? trimmedPathPart.slice(0, 7) + '...' : trimmedPathPart.slice(0, 15);

			currentPath += pathPart + '/';

			if (displayedPathPart === '') {
				break;
			}

			containerContent += `<li class="breadcrumb-item"><a href="${currentPath}">${displayedPathPart}</a></li>`;
		}
	}

	containerContent += `</ol>
    </nav>
  </div>
  <div id="list" class="list-group text-break"></div>
  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
</div>`;

	$('#content').html(containerContent);

	var password = localStorage.getItem('password' + path);

	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	function handleSuccessResult(res, path, prevReqParams) {
		console.log(res, path, prevReqParams);
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			if (fallback) {
				append_files_to_fallback_list(path, res['data']['files']);
			} else {
				append_files_to_list(path, res['data']['files']);
			}
		} else {
			console.log('doing something...')
			if (fallback) {
				append_files_to_fallback_list(path, res['data']['files']);
			} else {
				append_files_to_list(path, res['data']['files']);
			}
			if (window.scroll_status.event_bound !== true) {
				$(window).on('scroll', function() {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();

					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						if (window.scroll_status.loading_lock === true) {
							return;
						}

						window.scroll_status.loading_lock = true;

						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`)
							.insertBefore('#readme_md');

						let $list = $('#list');
						if (fallback) {
							console.log('fallback inside handleSuccessResult');
							requestListPath(path, {
									id: id,
									password: prevReqParams['password'],
									page_token: $list.data('nextPageToken'),
									page_index: $list.data('curPageIndex') + 1
								},
								handleSuccessResult,
								null, 5, id, fallback = true);
						} else {
							requestListPath(path, {
									password: prevReqParams['password'],
									page_token: $list.data('nextPageToken'),
									page_index: $list.data('curPageIndex') + 1
								},
								handleSuccessResult,
								null);
						}
					}
				});

				window.scroll_status.event_bound = true;
			}
		}

		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false;
		}
	}

	if (fallback) {
		console.log('fallback inside list');
		requestListPath(path, {
				id: id,
				password: password
			},
			handleSuccessResult,
			function(path) {
				$('#spinner').remove();
				var passwordInput = prompt("Directory encryption, please enter the password", "");
				localStorage.setItem('password' + path, passwordInput);

				if (passwordInput != null && passwordInput != "") {
					list(path);
				} else {
					history.go(-1);
				}
			}, null, fallback = true);
	} else {
		requestListPath(path, {
				password: password
			},
			handleSuccessResult,
			function(path) {
				$('#spinner').remove();
				var passwordInput = prompt("Directory encryption, please enter the password", "");
				localStorage.setItem('password' + path, passwordInput);

				if (passwordInput != null && passwordInput != "") {
					list(path);
				} else {
					history.go(-1);
				}
			});
	}


	const copyBtn = document.getElementById("handle-multiple-items-copy");

	// Add a click event listener to the copy button
	copyBtn.addEventListener("click", () => {
		// Get all the checked checkboxes
		const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');

		// Create an array to store the selected items' data
		const selectedItemsData = [];

		// Loop through each checked checkbox
    if (checkedItems.length === 0) {
      alert("No items selected!");
      return;
    }
		checkedItems.forEach((item) => {
			// Get the value of the checkbox (in this case, the URL)
			const itemData = item.value;
			// Push the value to the array
			selectedItemsData.push(itemData);
		});

		// Join the selected items' data with a newline character
		const dataToCopy = selectedItemsData.join(",\n");

		// Create a temporary input element
		const tempInput = document.createElement("textarea");
		tempInput.value = dataToCopy;

		// Add the temporary input element to the document
		document.body.appendChild(tempInput);

		// Select the text inside the temporary input element
		tempInput.select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Remove the temporary input element from the document
		document.body.removeChild(tempInput);

		// Alert the user that the data has been copied
		alert("Selected items copied to clipboard!");
	});
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_fallback_list(path, files) {
	try {
		console.log('append_files_to_fallback_list');
		var $list = $('#list');
		// Is it the last page of data?
		var is_lastpage_loaded = null === $list.data('nextPageToken');
		var is_firstpage = '0' == $list.data('curPageIndex');

		html = "";
		let targetFiles = [];
		var totalsize = 0;
		var is_file = false
		for (i in files) {
			var item = files[i];
			var p = "/fallback?id=" + item.id
			item['modifiedTime'] = utc2delhi(item['modifiedTime']);
			// replace / with %2F
			if (item['mimeType'] == 'application/vnd.google-apps.folder') {
				html += `<a href="${p}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
			} else {
				var totalsize = totalsize + Number(item.size);
				item['size'] = formatFileSize(item['size']);
				var is_file = true
				var epn = item.name;
				var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
				var pn = path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
				var c = "file";
				// README is displayed after the last page is loaded, otherwise it will affect the scroll event
				if (is_lastpage_loaded && item.name == "README.md" && UI.render_readme_md) {
					get_file(p, item, function(data) {
						markdown("#readme_md", data);
						$("img").addClass("img-fluid")
					});
				}
				if (item.name == "HEAD.md" && UI.render_head_md) {
					get_file(p, item, function(data) {
						markdown("#head_md", data);
						$("img").addClass("img-fluid")
					});
				}
				var ext = item.fileExtension
				//if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
				//targetFiles.push(filepath);
				pn += "?a=view";
				c += " view";
				//}
				html += `<div class="list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

				if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
					html += video_icon
				} else if ("|html|php|css|go|java|js|json|sh|".indexOf(`|${ext}|`) >= 0) {
					html += code_icon
				} else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
					html += zip_icon
				} else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
					html += image_icon
				} else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
					html += audio_icon
				} else if ("|md|".indexOf(`|${ext}|`) >= 0) {
					html += markdown_icon
				} else if ("|pdf|txt|".indexOf(`|${ext}|`) >= 0) {
					html += pdf_icon
				} else {
					html += file_icon
				}

				html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${p}&a=view">${item.name}</a>${UI.display_download ? `<a href="${link}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ``}${UI.display_size ? `<span class="badge bg-dark float-end"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;
			}
		}
		if (is_file && UI.allow_selecting_files) {
			document.getElementById('select_items').style.display = 'block';
		}


		/*let targetObj = {};
		targetFiles.forEach((myFilepath, myIndex) => {
		    if (!targetObj[myFilepath]) {
		        targetObj[myFilepath] = {
		            filepath: myFilepath,
		            prev: myIndex === 0 ? null : targetFiles[myIndex - 1],
		            next: myIndex === targetFiles.length - 1 ? null : targetFiles[myIndex + 1],
		        }
		    }
		})
		// console.log(targetObj)
		if (Object.keys(targetObj).length) {
		    localStorage.setItem(path, JSON.stringify(targetObj));
		    // console.log(path)
		}*/

		if (targetFiles.length > 0) {
			let old = localStorage.getItem(path);
			let new_children = targetFiles;
			// Reset on page 1; otherwise append
			if (!is_firstpage && old) {
				let old_children;
				try {
					old_children = JSON.parse(old);
					if (!Array.isArray(old_children)) {
						old_children = []
					}
				} catch (e) {
					old_children = [];
				}
				new_children = old_children.concat(targetFiles)
			}

			localStorage.setItem(path, JSON.stringify(new_children))
		}

		// When it is page 1, remove the horizontal loading bar
		$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
		// When it is the last page, count and display the total number of items
		if (is_lastpage_loaded) {
			total_size = formatFileSize(totalsize) || '0 Bytes';
			total_items = $list.find('.countitems').length;
			total_files = $list.find('.size_items').length;
			if (total_items == 0) {
				$('#count').removeClass('d-none').find('.number').text("Empty Folder");
			} else if (total_items == 1) {
				$('#count').removeClass('d-none').find('.number').text(total_items + " item");
			} else {
				$('#count').removeClass('d-none').find('.number').text(total_items + " items");
			}
			if (total_files == 0) {
				$('#count').removeClass('d-none').find('.totalsize').text("Zero Files");
			} else if (total_files == 1) {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
			} else {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
			}
		}
	} catch (e) {
		console.log(e);
	}
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_list(path, files) {
	var $list = $('#list');
	// Is it the last page of data?
	var is_lastpage_loaded = null === $list.data('nextPageToken');
	var is_firstpage = '0' == $list.data('curPageIndex');

	html = "";
	let targetFiles = [];
	var totalsize = 0;
	var is_file = false
	for (i in files) {
		var item = files[i];
		var ep = encodeURIComponent(item.name).replace(/\//g, '%2F') + '/';
		var p = path + ep.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
		item['modifiedTime'] = utc2delhi(item['modifiedTime']);
		// replace / with %2F
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a href="${p}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
		} else {
			var totalsize = totalsize + Number(item.size);
			item['size'] = formatFileSize(item['size']);
			var is_file = true
			var epn = item.name;
			var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
			var pn = path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
			var c = "file";
			// README is displayed after the last page is loaded, otherwise it will affect the scroll event
			if (is_lastpage_loaded && item.name == "README.md" && UI.render_readme_md) {
				get_file(p, item, function(data) {
					markdown("#readme_md", data);
					$("img").addClass("img-fluid")
				});
			}
			if (item.name == "HEAD.md" && UI.render_head_md) {
				get_file(p, item, function(data) {
					markdown("#head_md", data);
					$("img").addClass("img-fluid")
				});
			}
			var ext = item.fileExtension
      console.log(ext)
			//if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
			//targetFiles.push(filepath);
			pn += "?a=view";
			c += " view";
			//}
			html += `<div class="list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

      if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
        html += video_icon
      } else if ("|html|php|css|go|java|js|json|sh|".indexOf(`|${ext}|`) >= 0) {
        html += code_icon
      } else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
        html += zip_icon
      } else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
        html += image_icon
      } else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
        html += audio_icon
      } else if ("|md|".indexOf(`|${ext}|`) >= 0) {
        html += markdown_icon
      } else if ("|pdf|txt|".indexOf(`|${ext}|`) >= 0) {
        html += pdf_icon
      } else {
        html += file_icon
      }

			html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${pn}">${item.name}</a>${UI.display_download ? `<a href="${link}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ``}${UI.display_size ? `<span class="badge bg-dark float-end"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;
		}
	}
	if (is_file && UI.allow_selecting_files) {
		document.getElementById('select_items').style.display = 'block';
	}


	/*let targetObj = {};
	targetFiles.forEach((myFilepath, myIndex) => {
	    if (!targetObj[myFilepath]) {
	        targetObj[myFilepath] = {
	            filepath: myFilepath,
	            prev: myIndex === 0 ? null : targetFiles[myIndex - 1],
	            next: myIndex === targetFiles.length - 1 ? null : targetFiles[myIndex + 1],
	        }
	    }
	})
	// console.log(targetObj)
	if (Object.keys(targetObj).length) {
	    localStorage.setItem(path, JSON.stringify(targetObj));
	    // console.log(path)
	}*/

	if (targetFiles.length > 0) {
		let old = localStorage.getItem(path);
		let new_children = targetFiles;
		// Reset on page 1; otherwise append
		if (!is_firstpage && old) {
			let old_children;
			try {
				old_children = JSON.parse(old);
				if (!Array.isArray(old_children)) {
					old_children = []
				}
			} catch (e) {
				old_children = [];
			}
			new_children = old_children.concat(targetFiles)
		}

		localStorage.setItem(path, JSON.stringify(new_children))
	}

	// When it is page 1, remove the horizontal loading bar
	$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
	// When it is the last page, count and display the total number of items
	if (is_lastpage_loaded) {
		total_size = formatFileSize(totalsize) || '0 Bytes';
		total_items = $list.find('.countitems').length;
		total_files = $list.find('.size_items').length;
		if (total_items == 0) {
			$('#count').removeClass('d-none').find('.number').text("Empty Folder");
		} else if (total_items == 1) {
			$('#count').removeClass('d-none').find('.number').text(total_items + " item");
		} else {
			$('#count').removeClass('d-none').find('.number').text(total_items + " items");
		}
		if (total_files == 0) {
			$('#count').removeClass('d-none').find('.totalsize').text("Zero Files");
		} else if (total_files == 1) {
			$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
		} else {
			$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
		}
	}
}

/**
 * Render the search results list. There is a lot of repetitive code, but there are different logics in it.
 */
function render_search_result_list() {
	var content = `
  <div class="container"><br>
  <div id="update"></div>
  <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">
  <div class="d-flex align-items-center justify-content-between">
    <div class="form-check mr-3">
      <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">
      <label class="form-check-label" for="select-all-checkboxes">Select all</label>
    </div>
    <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-outline-dark">Copy</button>
  </div>
  </div>
  <div class="card">
  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Search Results</div>
  <div id="list" class="list-group text-break">
  </div>
  </div>
  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  `;
	$('#content').html(content);

	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	/**
	 * Callback after successful search request returns data
	 * The result returned by @param res (object)
	 * @param path the requested path
	 * @param prevReqParams parameters used in request
	 */
	function searchSuccessCallback(res, prevReqParams) {

		// Temporarily store nextPageToken and currentPageIndex in the list element
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		// Remove loading spinner
		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			// If it is the last page, unbind the scroll event, reset scroll_status, and append the data
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			append_search_result_to_list(res['data']['files']);
		} else {
			// If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
			append_search_result_to_list(res['data']['files']);
			if (window.scroll_status.event_bound !== true) {
				// Bind event, if not yet bound
				$(window).on('scroll', function() {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();
					// Roll to the bottom
					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						/*
     When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
                 Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
             */
						if (window.scroll_status.loading_lock === true) {
							return;
						}
						window.scroll_status.loading_lock = true;

						// Show a loading spinner
						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`)
							.insertBefore('#readme_md');

						let $list = $('#list');
						requestSearch({
								q: window.MODEL.q,
								page_token: $list.data('nextPageToken'),
								// Request next page
								page_index: $list.data('curPageIndex') + 1
							},
							searchSuccessCallback
						)
					}
				});
				window.scroll_status.event_bound = true
			}
		}

		// After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false
		}
	}

	// Start requesting data from page 1
	requestSearch({
		q: window.MODEL.q
	}, searchSuccessCallback);

	const copyBtn = document.getElementById("handle-multiple-items-copy");

	// Add a click event listener to the copy button
	copyBtn.addEventListener("click", () => {
		// Get all the checked checkboxes
		const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');

		// Create an array to store the selected items' data
		const selectedItemsData = [];
    if (checkedItems.length === 0) {
      alert("No items selected!");
      return;
    }
		// Loop through each checked checkbox
		checkedItems.forEach((item) => {
			// Get the value of the checkbox (in this case, the URL)
			const itemData = item.value;
			// Push the value to the array
			selectedItemsData.push(itemData);
		});

		// Join the selected items' data with a newline character
		const dataToCopy = selectedItemsData.join("\n");

		// Create a temporary input element
		const tempInput = document.createElement("textarea");
		tempInput.value = dataToCopy;

		// Add the temporary input element to the document
		document.body.appendChild(tempInput);

		// Select the text inside the temporary input element
		tempInput.select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Remove the temporary input element from the document
		document.body.removeChild(tempInput);

		// Alert the user that the data has been copied
		alert("Selected items copied to clipboard!");
	});
}

/**
 * Append a new page of search results
 * @param files
 */
function append_search_result_to_list(files) {
	try {
		var cur = window.current_drive_order || 0;
		var $list = $('#list');
		// Is it the last page of data?
		var is_lastpage_loaded = null === $list.data('nextPageToken');
		// var is_firstpage = '0' == $list.data('curPageIndex');

		html = "";
		var totalsize = 0;
		var is_file = false;
		for (i in files) {
			var item = files[i];
			if (item['size'] == undefined) {
				item['size'] = "";
			}

			item['modifiedTime'] = utc2delhi(item['modifiedTime']);
			if (item['mimeType'] == 'application/vnd.google-apps.folder') {
				html += `<a style="color: ${UI.folder_text_color};" onclick="onSearchResultItemClick('${item['id']}', false)" data-bs-toggle="modal" data-bs-target="#SearchModel" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
			} else {
				var is_file = true;
				var totalsize = totalsize + Number(item.size);
				item['size'] = formatFileSize(item['size']);
				var ext = item.fileExtension
				var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
				html += `<div style="color: ${UI.css_a_tag_color};" gd-type="$item['mimeType']}" class="countitems size_items list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

				if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
					html += video_icon
				} else if ("|html|php|css|go|java|js|json|sh|".indexOf(`|${ext}|`) >= 0) {
					html += code_icon
				} else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
					html += zip_icon
				} else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
					html += image_icon
				} else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
					html += audio_icon
				} else if ("|md|".indexOf(`|${ext}|`) >= 0) {
					html += markdown_icon
				} else if ("|pdf|txt|".indexOf(`|${ext}|`) >= 0) {
					html += pdf_icon
				} else {
					html += file_icon
				}

				html += ` <span onclick="onSearchResultItemClick('${item['id']}', true)" data-bs-toggle="modal" data-bs-target="#SearchModel">${item.name}</span>${UI.display_download ? `<a href="${link}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ``}<span class="badge float-end csize"> ${UI.display_size ? `<span class="badge bg-dark float-end"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;

			}
		}
		if (is_file && UI.allow_selecting_files) {
			document.getElementById('select_items').style.display = 'block';
		}
		// When it is page 1, remove the horizontal loading bar
		$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
		// When it is the last page, count and display the total number of items
		if (is_lastpage_loaded) {
			total_size = formatFileSize(totalsize) || '0 Bytes';
			total_items = $list.find('.countitems').length;
			total_files = $list.find('.size_items').length;
			if (total_items == 0) {
				$('#count').removeClass('d-none').find('.number').text("No Results");
			} else if (total_items == 1) {
				$('#count').removeClass('d-none').find('.number').text(total_items + " item");
			} else {
				$('#count').removeClass('d-none').find('.number').text(total_items + " items");
			}
			if (total_files == 0) {
				$('#count').removeClass('d-none').find('.totalsize').text("Found Nothing");
			} else if (total_files == 1) {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
			} else {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
			}
		}
	} catch (e) {
		console.log(e);
	}
}

/**
 * Search result item click event
 * @param a_ele Clicked element
 */
function onSearchResultItemClick(file_id, can_preview) {
	var cur = window.current_drive_order;
	var title = `Loading...`;
	$('#SearchModelLabel').html(title);
	var content = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div>`;
	$('#modal-body-space').html(content);
	var p = {
		id: file_id
	};
	// Request a path
	fetch(`/${cur}:id2path`, {
			method: 'POST',
			body: JSON.stringify(p),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then(function(response) {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Request failed.');
			}
		})
		.then(function(obj) {
			var href = `${obj.path}`;
			var encodedUrl = href.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F')
			title = `Result`;
			$('#SearchModelLabel').html(title);
			content = `<a class="btn btn-info" href="${encodedUrl}${can_preview ? '?a=view' : ''}">Open</a> <a class="btn btn-secondary" href="${encodedUrl}${can_preview ? '?a=view' : ''}" target="_blank">Open in New Tab</a>`;
			$('#modal-body-space').html(content);
		})
		.catch(function(error) {
			console.log(error);
			var link = ""
			title = `Fallback Method`;
			$('#SearchModelLabel').html(title);
			content = `<a class="btn btn-info" href="/fallback?id=${file_id}&${can_preview ? 'a=view' : ''}">Open</a> <a class="btn btn-secondary" href="/fallback?id=${file_id}&${can_preview ? 'a=view' : ''}" target="_blank">Open in New Tab</a>`;
			$('#modal-body-space').html(content);
		});
}

function get_file(path, file, callback) {
	var key = "file_path_" + path + file['modifiedTime'];
	var data = localStorage.getItem(key);
	if (data != undefined) {
		return callback(data);
	} else {
		$.get(path, function(d) {
			localStorage.setItem(key, d);
			callback(d);
		});
	}
}

async function fallback(id, type) {
	if (type) { // is a file id
		var cookie_folder_id = await getCookie("root_id") || '';
		$('#content').html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
		fetch("/0:fallback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id
				}),
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error("Request failed");
				}
				return response.json();
			})
			.then(function(obj) {
				console.log(obj);
				var mimeType = obj.mimeType;
				var fileExtension = obj.fileExtension
				const code = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"];
				const video = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"];
				const audio = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"];
				const image = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"];
				const pdf = ["pdf"];
				if (mimeType === "application/vnd.google-apps.folder") {
					window.location.href = window.location.pathname + "/";
				} else if (fileExtension) {
					const name = obj.name;
					const encoded_name = encodeURIComponent(name);
					const size = formatFileSize(obj.size);
					const url = UI.second_domain_for_dl ? UI.downloaddomain + obj.link : window.location.origin + obj.link;
					const file_id = obj.id;
					if (mimeType.includes("video") || video.includes(fileExtension)) {
						const poster = obj.thumbnailLink ? obj.thumbnailLink.replace("s220", "s0") : UI.poster;
						file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id);
					} else if (mimeType.includes("audio") || audio.includes(fileExtension)) {
						file_audio(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (mimeType.includes("image") || image.includes(fileExtension)) {
						file_image(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (mimeType.includes("pdf") || pdf.includes(fileExtension)) {
						file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (code.includes(fileExtension)) {
						file_code(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else {
						file_others(name, encoded_name, size, url, file_id, cookie_folder_id);
					}
				}
			})
			.catch(function(error) {
				var content = `
          <div class="container"><br>
          <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + error + `</div>
            </div>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <div class="card-text text-center">
              <div class="btn-group text-center">
                <a href="/" type="button" class="btn btn-primary">Homepage</a>
              </div>
            </div><br>
          </div>
        </div>`;
				$("#content").html(content);
			});
	} else { // is a folder id
		return list(id, true);
	}
}

// File display ?a=view
async function file(path) {
	var cookie_folder_id = await getCookie("root_id") || '';
	var name = path.split('/').pop();
	$('#content').html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
	fetch("", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				path: path
			}),
		})
		.then(function(response) {
			if (!response.ok) {
				throw new Error("Request failed");
			}
			return response.json();
		})
		.then(function(obj) {
			console.log(obj);
			var mimeType = obj.mimeType;
			var fileExtension = obj.fileExtension
			const code = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"];
			const video = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"];
			const audio = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"];
			const image = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"];
			const pdf = ["pdf"];
			if (mimeType === "application/vnd.google-apps.folder") {
				window.location.href = window.location.pathname + "/";
			} else if (fileExtension) {
				const name = obj.name;
				const encoded_name = encodeURIComponent(name);
				const size = formatFileSize(obj.size);
				const url = UI.second_domain_for_dl ? UI.downloaddomain + obj.link : window.location.origin + obj.link;
				const file_id = obj.id;
				if (mimeType.includes("video") || video.includes(fileExtension)) {
					const poster = obj.thumbnailLink ? obj.thumbnailLink.replace("s220", "s0") : UI.poster;
					file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id);
				} else if (mimeType.includes("audio") || audio.includes(fileExtension)) {
					file_audio(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (mimeType.includes("image") || image.includes(fileExtension)) {
					file_image(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (mimeType.includes("pdf") || pdf.includes(fileExtension)) {
					file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (code.includes(fileExtension)) {
					file_code(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else {
					file_others(name, encoded_name, size, url, file_id, cookie_folder_id);
				}
			}
		})
		.catch(function(error) {
			var content = `
          <div class="container"><br>
          <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + error + `</div>
            </div>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <div class="card-text text-center">
              <div class="btn-group text-center">
                <a href="/" type="button" class="btn btn-primary">Homepage</a>
              </div>
            </div><br>
          </div>
        </div>`;
			$("#content").html(content);
		});
}

const copyButton = `<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-outline-dark"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>`

function generateCopyFileBox(file_id, cookie_folder_id) {
	const copyFileBox = `<div class="row justify-content-center mt-3" id="copyresult">
  <div class="col-12 col-md-8" id="copystatus"><div class='alert alert-secondary' role='alert'> Send Request to Copy File </div></div>
  <div class="col-12 col-md-8"> <input id="user_folder_id" type="text" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${cookie_folder_id}" required></div>
  <div class="col-12 col-md-8 mt-2"> <button id="copy_file" onclick="copyFile('${file_id}')" style="margin-top: 5px;" class="btn btn-danger btn-block">Copy File to Own Drive</button></div>
  </div>`;

	return copyFileBox;
}

// Document display |zip|.exe/others direct downloads
function file_others(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
            <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
            </div>
            <div class="card-body">
            <div class="input-group mb-4">
              <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
            </div>
            <div class="card-text text-center">
            <div class="btn-group text-center">
                <a href="${url}" type="button" class="btn btn-primary">Download</a>
                <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only"></span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
                </div>
            </div>
            ` + copyButton + copyFileBox+`
            </div>
            <br></div>`;
	$("#content").html(content);
}

function file_code(name, encoded_name, size, bytes, url, ext, file_id, cookie_folder_id) {
	var type = {
		"html": "html",
		"php": "php",
		"css": "css",
		"go": "golang",
		"java": "java",
		"js": "javascript",
		"json": "json",
		"txt": "Text",
		"sh": "sh",
		"md": "Markdown",
	};

	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="card-body text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
        </div>
        <div id="code_spinner"></div>` +
		(UI.second_domain_for_dl ? `` : `<pre class="line-numbers language-markup" data-src="plugins/line-numbers/index.html" data-start="-5" style="white-space: pre-wrap; counter-reset: linenumber -6;" data-src-status="loaded" tabindex="0"><code id="editor"></code></pre>`) +
		`<div class="card-body">
          <div class="input-group mb-4">
            <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="card-text text-center">
            <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
            </div>
            ` + copyButton + copyFileBox + `
          </div>
          <br>
        </div>
      </div>
    </div>`;

	$('#content').html(content);
	var spinner = '<div class="d-flex justify-content-center"><div class="spinner-border m-5" role="status"><span class="sr-only"></span></div></div>';
	$("#code_spinner").html(spinner);
	if (bytes <= 1024 * 1024 * 2) {
		$.get(url, function(data) {
			$('#editor').html($('<div/>').text(data).html());
			$("#code_spinner").html("");
			var code_type = "Text";
			if (type[ext] != undefined) {
				code_type = type[ext];
			}
		});
	} else {
		$("#code_spinner").html("");
		$('#editor').html(`<div class="${UI.file_view_alert_class}" id="file_details" role="alert">File size is too large to preview, Max Limit is 2 MB</div>`);
	}
}



// Document display video |mp4|webm|avi|
function file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id) {
	var url_base64 = btoa(url);
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}
	let player
	if (!UI.disable_player) {
		if (player_config.player == "plyr") {
			player = `<video id="player" playsinline controls data-poster="${poster}">
      <source src="${url}" type="video/mp4" />
      <source src="${url}" type="video/webm" />
        </video>`
			player_js = 'https://cdn.plyr.io/' + player_config.plyr_io_version + '/plyr.polyfilled.js'
			player_css = 'https://cdn.plyr.io/' + player_config.plyr_io_version + '/plyr.css'
		} else if (player_config.player == "videojs") {
			player = `<video id="vplayer" poster="${poster}" muted=false class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
      <source src="${url}" type="video/mp4" />
      <source src="${url}" type="video/webm" />
      <source src="${url}" type="video/avi" />
    </video>`
			player_js = 'https://vjs.zencdn.net/' + player_config.videojs_version + '/video.js'
			player_css = 'https://vjs.zencdn.net/' + player_config.videojs_version + '/video-js.css'
		} else if (player_config.player == "dplayer") {
			player = `<div id="player-container"></div>`
			player_js = 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js'
			player_css = 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css'
		} else if (player_config.player == "jwplayer") {
			player = `<div id="player"></div>`
			player_js = 'https://content.jwplatform.com/libraries/IDzF9Zmk.js'
			player_css = ''
		}
	}
	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>${player}</div>
        </br>
        ${UI.disable_video_download ? `` : `
          <div class="card-body">
          <div class="input-group mb-4">
          <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="iina://weblink?url=${url}">IINA</a>
              <a class="dropdown-item" href="potplayer://${url}">PotPlayer</a>
              <a class="dropdown-item" href="vlc://${url}">VLC Mobile</a>
              <a class="dropdown-item" href="${url}">VLC Desktop</a>
              <a class="dropdown-item" href="nplayer-${url}">nPlayer</a>
              <a class="dropdown-item" href="intent://${url}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>
              <a class="dropdown-item" href="mpv://${url_base64}">mpv x64</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${encoded_name};end">MX Player (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.pro;S.title=${encoded_name};end">MX Player (Pro)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
          </div>
          `+copyButton+copyFileBox+`
          
          </div>
          </div>
          `}
      </div>
    </div>
  `;
	$("#content").html(content);

	// Load Video.js and initialize the player
	var videoJsScript = document.createElement('script');
	videoJsScript.src = player_js;
	videoJsScript.onload = function() {
		// Video.js is loaded, initialize the player
		if (player_config.player == "plyr") {
			const player = new Plyr('#player');
		} else if (player_config.player == "videojs") {
			const player = new videojs('vplayer');
		} else if (player_config.player == "dplayer") {
			const dp = new DPlayer({
				container: document.getElementById('player-container'),
				screenshot: true,
				video: {
					url: url,
					pic: poster,
					thumbnails: poster,
				},
			});
		} else if (player_config.player == "jwplayer") {
			jwplayer("player").setup({
				file: url,
				type: mimeType,
				autostart: false,
				image: poster,
				width: "100%",
				aspectratio: "16:9",
				title: name,
				description: "Powered by Google Drive Index",
				tracks: [{
					file: url,
					kind: "captions",
					label: "Default",
					"default": true,
				}],
				captions: {
					color: "#f3f378",
					fontSize: 14,
					backgroundOpacity: 50,
					edgeStyle: "raised",
				},
			});
		}

	};
	document.head.appendChild(videoJsScript);

	var videoJsStylesheet = document.createElement('link');
	videoJsStylesheet.href = player_css;
	videoJsStylesheet.rel = 'stylesheet';
	document.head.appendChild(videoJsStylesheet);
}


// File display Audio |mp3|flac|m4a|wav|ogg|
function file_audio(name, encoded_name, size, url, file_id, cookie_folder_id) {
	var url_base64 = btoa(url);
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
          ${UI.disable_player ? `` : `
          <video id="aplayer" muted=false class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
            <source src="${url}" type="audio/mpeg" />
            <source src="${url}" type="audio/ogg" />
            <source src="${url}" type="audio/wav" />
          </video>`}
        </div>
        </br>
        ${UI.disable_audio_download ? `` : `
          <div class="card-body">
          <div class="input-group mb-4">
          <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="iina://weblink?url=${url}">IINA</a>
              <a class="dropdown-item" href="potplayer://${url}">PotPlayer</a>
              <a class="dropdown-item" href="vlc://${url}">VLC Mobile</a>
              <a class="dropdown-item" href="${url}">VLC Desktop</a>
              <a class="dropdown-item" href="nplayer-${url}">nPlayer</a>
              <a class="dropdown-item" href="intent://${url}#Intent;type=audio/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>
              <a class="dropdown-item" href="mpv://${url_base64}">mpv x64</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${encoded_name};end">MX Player (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.pro;S.title=${encoded_name};end">MX Player (Pro)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
          </div>
          `+copyButton+copyFileBox+`
          <br>
          </div>
          </div>
          `}
      </div>
    </div>
  `;
	$("#content").html(content);

	// Load Video.js and initialize the player
	var videoJsScript = document.createElement('script');
	videoJsScript.src = 'https://vjs.zencdn.net/' + UI.videojs_version + '/video.min.js';
	videoJsScript.onload = function() {
		// Video.js is loaded, initialize the player
		const player = videojs('aplayer');
	};
	document.head.appendChild(videoJsScript);

	var videoJsStylesheet = document.createElement('link');
	videoJsStylesheet.href = 'https://vjs.zencdn.net/' + UI.videojs_version + '/video-js.css';
	videoJsStylesheet.rel = 'stylesheet';
	document.head.appendChild(videoJsStylesheet);
}



// Document display pdf
function file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
    <div class="card">
    <div class="card-body text-center">
    <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
    <div>
    </div><br>
    <iframe src="https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>
    </div>
    <div class="card-body">
    <div class="input-group mb-4">
    <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
    </div>
    <div class="card-text text-center">
    <div class="btn-group text-center">
        <a href="${url}" type="button" class="btn btn-primary">Download</a>
        <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only"></span>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
        </div>
    </div>
    ` + copyButton + `
    </div>
    <br>
    
    </div>
    </div>
    </div>  
  `;
	$("#content").html(content);
}

// image display
function file_image(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements // wait until image is loaded and then hide spinner
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card">
        <div class="card-body text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
          <img src="${url}" id="load_image" width="100%">
        </div>
        <div class="card-body">
          <div class="input-group mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Full URL</span>
            </div>
            <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="card-text text-center">
            <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
            </div>
            ` + copyButton + copyFileBox + `
          </div>
          <br>
        </div>
      </div>
    </div>
  `;
	$('#content').html(content);
}

// Time conversion
function utc2delhi(utc_datetime) {
	// Convert UTC datetime to local Delhi time
	var utcDate = new Date(utc_datetime);
	var delhiDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

	// Format the Delhi date and time
	var year = delhiDate.getFullYear();
	var month = ('0' + (delhiDate.getMonth() + 1)).slice(-2);
	var date = ('0' + delhiDate.getDate()).slice(-2);
	var hour = ('0' + delhiDate.getHours()).slice(-2);
	var minute = ('0' + delhiDate.getMinutes()).slice(-2);
	var second = ('0' + delhiDate.getSeconds()).slice(-2);

	return `${date}-${month}-${year} ${hour}:${minute}:${second}`;
}


// bytes adaptive conversion to KB, MB, GB
function formatFileSize(bytes) {
	if (bytes >= 1099511627776) {
		bytes = (bytes / 1099511627776).toFixed(2) + ' TB';
	} else if (bytes >= 1073741824) {
		bytes = (bytes / 1073741824).toFixed(2) + ' GB';
	} else if (bytes >= 1048576) {
		bytes = (bytes / 1048576).toFixed(2) + ' MB';
	} else if (bytes >= 1024) {
		bytes = (bytes / 1024).toFixed(2) + ' KB';
	} else if (bytes > 1) {
		bytes = bytes + ' bytes';
	} else if (bytes === 1) {
		bytes = bytes + ' byte';
	} else {
		bytes = '';
	}
	return bytes;
}


String.prototype.trim = function(char) {
	if (char) {
		return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	}
	return this.replace(/^\s+|\s+$/g, '');
};


// README.md HEAD.md support
function markdown(el, data) {
	var html = marked.parse(data);
	$(el).show().html(html);
}

// Listen for fallback events
window.onpopstate = function() {
	var path = window.location.pathname;
	render(path);
}

$(function() {
	init();
	var path = window.location.pathname;
	/*$("body").on("click", '.folder', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});
	$("body").on("click", '.view', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});*/

	render(path);
});

// Copy to Clipboard for Direct Links, This will be modified soon with other UI
function copyFunction() {
	var copyText = document.getElementById("dlurl");
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value)
		.then(function() {
			var tooltip = document.getElementById("myTooltip");
			tooltip.innerHTML = "Copied";
		})
		.catch(function(error) {
			console.error("Failed to copy text: ", error);
		});
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy";
}

// function to update the list of checkboxes
function updateCheckboxes() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const selectAllCheckbox = document.getElementById('select-all-checkboxes');

	if (checkboxes.length > 0 && selectAllCheckbox) { // Check if checkboxes and selectAllCheckbox exist
		selectAllCheckbox.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => {
				checkbox.checked = selectAllCheckbox.checked;
			});
		});
	}
}

async function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

// Copy File to User Drive
async function copyFile(driveid) {
	try {
		const copystatus = document.getElementById('copystatus');
		copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Processing... </div>`;

		const user_folder_id = document.getElementById('user_folder_id').value;
		if (user_folder_id === '') {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Empty ID </div>`;
			return null;
		}

		document.getElementById('spinner').style.display = 'block';
		document.cookie = `root_id=${user_folder_id}; expires=Thu, 18 Dec 2050 12:00:00 UTC`;
		const time = Math.floor(Date.now() / 1000);
		const response = await fetch('/copy', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `id=${encodeURIComponent(driveid)}&root_id=${user_folder_id}&resourcekey=null&time=${time}`
		});

		if (response.status === 500) {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File, Make Sure you've added system@zindex.eu.org to your Destination Folder </div>`;
		} else if (response.status === 401) {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unauthorized </div>`;
		} else if (response.ok) {
			const data = await response.json();
			if (data && data.name) {
				const link = `https://drive.google.com/file/d/${data.id}/view?usp=share_link`;
				const copyresult = document.getElementById('copyresult');
				copyresult.innerHTML = `<div class="col-12 col-md-12"> <input type="text" id="usercopiedfile" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${link}" readonly></div> <div class="col-12 col-md-12"> <a href="${link}" target="_blank" style="margin-top: 5px;" class="btn btn-danger btn-block">Open Copied File</a></div>`;
			} else if (data && data.error && data.error.message) {
				copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> ` + data.error.message + ` </div>`;
			} else {
				copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File </div>`;
			}
		} else {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File </div>`;
		}

		document.getElementById('spinner').style.display = 'none';
	} catch (error) {
		const copystatus = document.getElementById('copystatus');
		copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> An error occurred ` + error + `</div>`;
		document.getElementById('spinner').style.display = 'none';
	}
}


// create a MutationObserver to listen for changes to the DOM
const observer = new MutationObserver(() => {
	updateCheckboxes();
});

// define the options for the observer (listen for changes to child elements)
const options = {
	childList: true,
	subtree: true
};

// observe changes to the body element
observer.observe(document.documentElement, options);