<script lang="ts">
	import { Transition, Presentation, Slide } from '@animotion/core'
</script>

<Presentation options={{ controls: false, progress: false, transition: 'slide' }}>
	<Slide class="h-full place-content-center place-items-center">
		<Transition>
			<h1>Hello</h1>
		</Transition>
		<Transition>
			<h1>World</h1>
		</Transition>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">wohooo</Slide>
</Presentation>
