export type Category = 'svelte' | 'sveltekit'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Category[]
	published: boolean
}
