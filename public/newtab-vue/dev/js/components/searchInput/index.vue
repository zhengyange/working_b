<script type="text/javascript">
	import SearchEngine from './SearchEngine.vue';
	import SearchResult from './SearchResult.vue';
	export default {
		data: function(){
			return {
				engines: [
					{title: '搜狗'},
					{title: '百度'},
					{title: 'Bing'},
					{title: 'Google'},
				],
				searchResults: {
					from: '搜狗搜索',
					sgurl: '阿迪达斯',
					results: ['adsfe','adsfe','adsfe','adsfe','adsfe']
				},
				// showSearchEngines: false,
				// showSearchResults: false
			}
		},
		props: ['showSearchEngines', 'showSearchResults'],
		methods: {
			toggleShowEngines(){
				// this.showSearchEngines = !this.showSearchEngines;
				this.$dispatch('toggle-engines')
			},
			handleSearchResults(){
				this.$dispatch('show-results');
			}
		},

		components: {
			SearchEngine,
			SearchResult
		}
	}
</script>
<template>
	<div class="search-input">
		<div class="search-change"
			
		>
			<div class="search-logo" @click="toggleShowEngines"></div>
		</div>
		<input type="search" class="input-text" placeholder="百度"
			@keyup="handleSearchResults"
		>
		<label class="search-btn"></label>
		<search-engine 
			v-show="showSearchEngines" 
			:engines="engines"			
		>
		</search-engine>
		<search-result 
			:searchResults="searchResults"
			v-show="showSearchResults"
		>
		</search-result>
	</div>
</template>
<style lang="sass">
	$gColor: #2ECC71;
	$oColor: #F39C12;
	.search-input{margin-top: 20px;position: relative;
		.search-btn, .search-change, #sg, .search-engine{position: absolute;}
		.input-text{width: 560px; height: 40px;line-height: 32px; border-radius: 20px; font-size: 1.6rem;padding-left: 50px; padding-right: 80px;color: $gColor;}
		.search-btn{top: 0; right: 0; width: 76px; height: 40px; border-radius: 0 40px 40px 0;display: inline;text-align: center; line-height: 40px; background: $gColor url('../../../img/search.png') no-repeat 50% 50% / 35%;cursor: pointer;}
		.search-change{top:0; left: 0; width: 50px; height: 40px; text-align: center;line-height: 40px; cursor: pointer; color: #ccc;}
		.search-logo{height: 40px; background-repeat:no-repeat;background-size: 60%; background-position: 10px center;background-image: url('../../../img/search-baidu.png')}
		.search-engine{z-index: 10; top: 45px; left: 6px; width: 90px; height: auto; background-color: rgba(255,255,255, .8); border-radius: 8px; overflow: hidden;}
		.search-engine-item{width: 100%; height: 34px; color: $gColor;cursor: pointer;line-height: 34px;font-size: 1.4rem;}
		.search-engine-item:hover{color: #fff; background-color: $gColor;}
		#sg{z-index: 10; width: 525px;height: auto;top: 45px;left: 17px;border-radius: 10px;overflow: hidden; background-color: rgba(255,255,255,.82);}
		.sg{width: 510px;height: 31px;line-height: 26px;border-radius: none;cursor: default; padding-left: 20px;padding-top: 5px;font-size: 1.6rem;overflow: hidden;float: left;white-space: nowrap;text-overflow: ellipsis;text-align:left;}
		.sgsearch{color: $oColor;}
		.sgurl {color: #2980B9;}
		.sgword {color: #27AE60;}
	}
</style>