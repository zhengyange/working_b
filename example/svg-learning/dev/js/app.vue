<script type="text/javascript">
	import './circle1.svg';
	export default {

	}
</script>
<template>
	<div class="page">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
			<!-- <rect xmlns="http://www.w3.org/2000/svg" x="55.4054" y="10" width="100" height="100"> -->
			<!-- <rect xmlns="http://www.w3.org/2000/svg" style="x: 55.4054; y: 10; width: 100px; height:100px;">
		        <animate attributeType="CSS" attributeName="x" from="-100" to="120" dur="10s" repeatCount="indefinite"/>
		    </rect>
 -->
    <!-- Draw the outline of the motion path in grey, along
         with 2 small circles at key points -->
		    <path d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110" stroke="lightgrey" stroke-width="2" fill="none" id="theMotionPath"/>
		    <circle cx="10" cy="110" r="3" fill="lightgrey"/>
		    <circle cx="110" cy="10" r="3" fill="lightgrey"/>

		    <!-- Here is a red circle which will be moved along the motion path. -->
		    <circle id="circle1" cx="" cy="" r="5" fill="red">
		        <!-- Define the motion path animation -->
		        <animateMotion dur="6s" repeatCount="indefinite">
		           <mpath xlink:href="#theMotionPath"/>
		        </animateMotion>
		    </circle>
		    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    	</polygon>
		</svg>
	</div>
</template>
<style lang="sass">
	html,body,.page,svg{
		width: 100%;
		height: 2000px;
	}
</style>