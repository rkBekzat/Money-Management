export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a8880613.js","imports":["_app/immutable/entry/start.a8880613.js","_app/immutable/chunks/index.5c2ce920.js","_app/immutable/chunks/singletons.7f1cbf23.js","_app/immutable/chunks/paths.f6639510.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.22b3bde1.js","imports":["_app/immutable/entry/app.22b3bde1.js","_app/immutable/chunks/index.5c2ce920.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
