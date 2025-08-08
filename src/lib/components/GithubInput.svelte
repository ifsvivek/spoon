<!-- GithubInput.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';

	export let isLoading = false;
	const dispatch = createEventDispatcher();
	let githubUrl = '';
	let error = null;

	function validateGitHubUrl(url) {
		if (!url) return 'URL is required';
		if (!url.match(/^(https?:\/\/)?(www\.)?github\.com\/[^/]+\/[^/]+|\b[^/]+\/[^/]+$/)) {
			return 'Please enter a valid GitHub URL in format: owner/repo or https://github.com/owner/repo';
		}
		return null;
	}

	function handleSubmit() {
		error = validateGitHubUrl(githubUrl);
		if (error) return;
		dispatch('submit', { url: githubUrl });
	}
</script>

<div class="space-y-3">
	<div>
		<label for="github-url" class="mb-1.5 block text-sm font-medium text-gray-700">
			GitHub Repository URL
		</label>
		<div class="flex gap-2">
			<input
				type="text"
				id="github-url"
				bind:value={githubUrl}
				placeholder="https://github.com/owner/repo or owner/repo"
				class="block w-full min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-base shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100"
				disabled={isLoading}
			/>
			<button
				on:click={handleSubmit}
				disabled={isLoading || !githubUrl}
				class="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-5 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
			>
				{#if isLoading}
					<svg
						class="mr-2 -ml-1 h-5 w-5 animate-spin text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				{/if}
				Analyze
			</button>
		</div>
	</div>

	{#if error}
		<div class="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
			<svg
				class="mt-0.5 h-5 w-5 flex-shrink-0"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>{error}</span>
		</div>
	{:else}
		<p class="text-sm text-gray-500">
			Enter the URL of any public GitHub repository (e.g., <span
				class="font-mono text-gray-600">chinni-03/remynd</span
			>)
		</p>
	{/if}
</div>
