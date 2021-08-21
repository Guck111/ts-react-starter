module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint", "react", "react-hooks", "eslint-plugin-import", "prettier"],
	"env": {
		"browser": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended"
	],
	"parserOptions": {
		"project": ["tsconfig.json"],
		"ecmaVersion": 2020,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [
			"warn",
			{
				"extensions": [".jsx", ".tsx"]
			}
		],
		"react/prop-types": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		"no-console": "error",
		"@typescript-eslint/no-non-null-assertion": "warn",
		"prettier/prettier": "error",
		// "react-hooks/exhaustive-deps": "warn",
		"react/jsx-uses-vars": "error",
		"no-unused-vars": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"no-unused-expressions": [
			"error",
			{
				"allowShortCircuit": true,
				"allowTernary": true
			}
		]
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
