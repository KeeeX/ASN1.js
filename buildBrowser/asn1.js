"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.fromBER=fromBER;exports.compareSchema=compareSchema;exports.verifySchema=verifySchema;exports.fromJSON=fromJSON;exports.RawData=exports.Repeated=exports.Any=exports.Choice=exports.TIME=exports.Duration=exports.DateTime=exports.TimeOfDay=exports.DATE=exports.GeneralizedTime=exports.UTCTime=exports.CharacterString=exports.GeneralString=exports.VisibleString=exports.GraphicString=exports.IA5String=exports.VideotexString=exports.TeletexString=exports.PrintableString=exports.NumericString=exports.UniversalString=exports.BmpString=exports.Utf8String=exports.ObjectIdentifier=exports.Enumerated=exports.Integer=exports.BitString=exports.OctetString=exports.Null=exports.Set=exports.Sequence=exports.Boolean=exports.EndOfContent=exports.Constructed=exports.Primitive=exports.BaseBlock=void 0;require("core-js/modules/es7.symbol.async-iterator");require("core-js/modules/es6.symbol");require("core-js/modules/es6.reflect.get");require("core-js/modules/es6.object.set-prototype-of");require("core-js/modules/es6.regexp.replace");require("core-js/modules/es6.number.constructor");require("core-js/modules/es6.typed.uint32-array");require("core-js/modules/es6.typed.uint16-array");require("core-js/modules/es6.regexp.to-string");require("core-js/modules/es6.function.name");require("core-js/modules/es6.typed.uint8-array");var _pvutils=require("pvutils");function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}//**************************************************************************************
//region Declaration of global variables
//**************************************************************************************
var powers2=[new Uint8Array([1])];var digitsString="0123456789";//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration for "LocalBaseBlock" class
//**************************************************************************************
/**
 * Class used as a base block for all remaining ASN.1 classes
 * @typedef LocalBaseBlock
 * @interface
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 */var LocalBaseBlock=/*#__PURE__*/function(){//**********************************************************************************
/**
	 * Constructor for "LocalBaseBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueBeforeDecode]
	 */function LocalBaseBlock(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalBaseBlock);/**
		 * @type {number} blockLength
		 */this.blockLength=(0,_pvutils.getParametersValue)(parameters,"blockLength",0);/**
		 * @type {string} error
		 */this.error=(0,_pvutils.getParametersValue)(parameters,"error","");/**
		 * @type {Array.<string>} warnings
		 */this.warnings=(0,_pvutils.getParametersValue)(parameters,"warnings",[]);//noinspection JSCheckFunctionSignatures
/**
		 * @type {ArrayBuffer} valueBeforeDecode
		 */if("valueBeforeDecode"in parameters)this.valueBeforeDecode=parameters.valueBeforeDecode.slice(0);else this.valueBeforeDecode=new ArrayBuffer(0);}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalBaseBlock,[{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */value:function toJSON(){return{blockName:this.constructor.blockName(),blockLength:this.blockLength,error:this.error,warnings:this.warnings,valueBeforeDecode:(0,_pvutils.bufferToHexCodes)(this.valueBeforeDecode,0,this.valueBeforeDecode.byteLength)};}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"baseBlock";}}]);return LocalBaseBlock;}();//**************************************************************************************
//endregion
//**************************************************************************************
//region Description for "LocalHexBlock" class
//**************************************************************************************
/**
 * Class used as a base block for all remaining ASN.1 classes
 * @extends LocalBaseBlock
 * @typedef LocalHexBlock
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 * @property {boolean} isHexOnly
 * @property {ArrayBuffer} valueHex
 */ //noinspection JSUnusedLocalSymbols
var LocalHexBlock=function LocalHexBlock(BaseClass){return(/*#__PURE__*/function(_BaseClass){_inherits(LocalHexBlockMixin,_BaseClass);//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Constructor for "LocalHexBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function LocalHexBlockMixin(){var _this;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalHexBlockMixin);_this=_possibleConstructorReturn(this,_getPrototypeOf(LocalHexBlockMixin).call(this,parameters));/**
		 * @type {boolean}
		 */_this.isHexOnly=(0,_pvutils.getParametersValue)(parameters,"isHexOnly",false);/**
		 * @type {ArrayBuffer}
		 */if("valueHex"in parameters)_this.valueHex=parameters.valueHex.slice(0);else _this.valueHex=new ArrayBuffer(0);return _this;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalHexBlockMixin,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.warnings.push("Zero buffer length");return inputOffset;}//endregion
//region Copy input buffer to internal buffer
this.valueHex=inputBuffer.slice(inputOffset,inputOffset+inputLength);//endregion
this.blockLength=inputLength;return inputOffset+inputLength;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(this.isHexOnly!==true){this.error="Flag \"isHexOnly\" is not set, abort";return new ArrayBuffer(0);}if(sizeOnly===true)return new ArrayBuffer(this.valueHex.byteLength);//noinspection JSCheckFunctionSignatures
return this.valueHex.slice(0);}//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */},{key:"toJSON",value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalHexBlockMixin.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.blockName=this.constructor.blockName();object.isHexOnly=this.isHexOnly;object.valueHex=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"hexBlock";}}]);return LocalHexBlockMixin;}(BaseClass));};//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of identification block class
//**************************************************************************************
var LocalIdentificationBlock=/*#__PURE__*/function(_LocalHexBlock){_inherits(LocalIdentificationBlock,_LocalHexBlock);//**********************************************************************************
/**
	 * Constructor for "LocalBaseBlock" class
	 * @param {Object} [parameters={}]
	 * @property {Object} [idBlock]
	 */function LocalIdentificationBlock(){var _this2;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalIdentificationBlock);_this2=_possibleConstructorReturn(this,_getPrototypeOf(LocalIdentificationBlock).call(this));if("idBlock"in parameters){//region Properties from hexBlock class
_this2.isHexOnly=(0,_pvutils.getParametersValue)(parameters.idBlock,"isHexOnly",false);_this2.valueHex=(0,_pvutils.getParametersValue)(parameters.idBlock,"valueHex",new ArrayBuffer(0));//endregion
_this2.tagClass=(0,_pvutils.getParametersValue)(parameters.idBlock,"tagClass",-1);_this2.tagNumber=(0,_pvutils.getParametersValue)(parameters.idBlock,"tagNumber",-1);_this2.isConstructed=(0,_pvutils.getParametersValue)(parameters.idBlock,"isConstructed",false);}else{_this2.tagClass=-1;_this2.tagNumber=-1;_this2.isConstructed=false;}return _this2;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalIdentificationBlock,[{key:"toBER",//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;//region Initial variables
var firstOctet=0;var retBuf;var retView;//endregion
switch(this.tagClass){case 1:firstOctet|=0x00;// UNIVERSAL
break;case 2:firstOctet|=0x40;// APPLICATION
break;case 3:firstOctet|=0x80;// CONTEXT-SPECIFIC
break;case 4:firstOctet|=0xC0;// PRIVATE
break;default:this.error="Unknown tag class";return new ArrayBuffer(0);}if(this.isConstructed)firstOctet|=0x20;if(this.tagNumber<31&&!this.isHexOnly){retBuf=new ArrayBuffer(1);retView=new Uint8Array(retBuf);if(!sizeOnly){var number=this.tagNumber;number&=0x1F;firstOctet|=number;retView[0]=firstOctet;}return retBuf;}if(this.isHexOnly===false){var encodedBuf=(0,_pvutils.utilToBase)(this.tagNumber,7);var encodedView=new Uint8Array(encodedBuf);var size=encodedBuf.byteLength;retBuf=new ArrayBuffer(size+1);retView=new Uint8Array(retBuf);retView[0]=firstOctet|0x1F;if(!sizeOnly){for(var i=0;i<size-1;i++){retView[i+1]=encodedView[i]|0x80;}retView[size]=encodedView[size-1];}return retBuf;}retBuf=new ArrayBuffer(this.valueHex.byteLength+1);retView=new Uint8Array(retBuf);retView[0]=firstOctet|0x1F;if(sizeOnly===false){var curView=new Uint8Array(this.valueHex);for(var _i=0;_i<curView.length-1;_i++){retView[_i+1]=curView[_i]|0x80;}retView[this.valueHex.byteLength]=curView[curView.length-1];}return retBuf;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */},{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.error="Zero buffer length";return-1;}//endregion
//region Find tag class
var tagClassMask=intBuffer[0]&0xC0;switch(tagClassMask){case 0x00:this.tagClass=1;// UNIVERSAL
break;case 0x40:this.tagClass=2;// APPLICATION
break;case 0x80:this.tagClass=3;// CONTEXT-SPECIFIC
break;case 0xC0:this.tagClass=4;// PRIVATE
break;default:this.error="Unknown tag class";return-1;}//endregion
//region Find it's constructed or not
this.isConstructed=(intBuffer[0]&0x20)===0x20;//endregion
//region Find tag number
this.isHexOnly=false;var tagNumberMask=intBuffer[0]&0x1F;//region Simple case (tag number < 31)
if(tagNumberMask!==0x1F){this.tagNumber=tagNumberMask;this.blockLength=1;}//endregion
//region Tag number bigger or equal to 31
else{var count=1;this.valueHex=new ArrayBuffer(255);var tagNumberBufferMaxLength=255;var intTagNumberBuffer=new Uint8Array(this.valueHex);//noinspection JSBitwiseOperatorUsage
while(intBuffer[count]&0x80){intTagNumberBuffer[count-1]=intBuffer[count]&0x7F;count++;if(count>=intBuffer.length){this.error="End of input reached before message was fully decoded";return-1;}//region In case if tag number length is greater than 255 bytes (rare but possible case)
if(count===tagNumberBufferMaxLength){tagNumberBufferMaxLength+=255;var _tempBuffer=new ArrayBuffer(tagNumberBufferMaxLength);var _tempBufferView=new Uint8Array(_tempBuffer);for(var i=0;i<intTagNumberBuffer.length;i++){_tempBufferView[i]=intTagNumberBuffer[i];}this.valueHex=new ArrayBuffer(tagNumberBufferMaxLength);intTagNumberBuffer=new Uint8Array(this.valueHex);}//endregion
}this.blockLength=count+1;intTagNumberBuffer[count-1]=intBuffer[count]&0x7F;// Write last byte to buffer
//region Cut buffer
var tempBuffer=new ArrayBuffer(count);var tempBufferView=new Uint8Array(tempBuffer);for(var _i2=0;_i2<count;_i2++){tempBufferView[_i2]=intTagNumberBuffer[_i2];}this.valueHex=new ArrayBuffer(count);intTagNumberBuffer=new Uint8Array(this.valueHex);intTagNumberBuffer.set(tempBufferView);//endregion
//region Try to convert long tag number to short form
if(this.blockLength<=9)this.tagNumber=(0,_pvutils.utilFromBase)(intTagNumberBuffer,7);else{this.isHexOnly=true;this.warnings.push("Tag too long, represented as hex-coded");}//endregion
}//endregion
//endregion
//region Check if constructed encoding was using for primitive type
if(this.tagClass===1&&this.isConstructed){switch(this.tagNumber){case 1:// Boolean
case 2:// REAL
case 5:// Null
case 6:// OBJECT IDENTIFIER
case 9:// REAL
case 14:// Time
case 23:case 24:case 31:case 32:case 33:case 34:this.error="Constructed encoding used for primitive type";return-1;default:}}//endregion
return inputOffset+this.blockLength;// Return current offset in input buffer
}//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName: string,
	 *  tagClass: number,
	 *  tagNumber: number,
	 *  isConstructed: boolean,
	 *  isHexOnly: boolean,
	 *  valueHex: ArrayBuffer,
	 *  blockLength: number,
	 *  error: string, warnings: Array.<string>,
	 *  valueBeforeDecode: string}}
	 */},{key:"toJSON",value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalIdentificationBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.blockName=this.constructor.blockName();object.tagClass=this.tagClass;object.tagNumber=this.tagNumber;object.isConstructed=this.isConstructed;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"identificationBlock";}}]);return LocalIdentificationBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of length block class
//**************************************************************************************
var LocalLengthBlock=/*#__PURE__*/function(_LocalBaseBlock){_inherits(LocalLengthBlock,_LocalBaseBlock);//**********************************************************************************
/**
	 * Constructor for "LocalLengthBlock" class
	 * @param {Object} [parameters={}]
	 * @property {Object} [lenBlock]
	 */function LocalLengthBlock(){var _this3;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalLengthBlock);_this3=_possibleConstructorReturn(this,_getPrototypeOf(LocalLengthBlock).call(this));if("lenBlock"in parameters){_this3.isIndefiniteForm=(0,_pvutils.getParametersValue)(parameters.lenBlock,"isIndefiniteForm",false);_this3.longFormUsed=(0,_pvutils.getParametersValue)(parameters.lenBlock,"longFormUsed",false);_this3.length=(0,_pvutils.getParametersValue)(parameters.lenBlock,"length",0);}else{_this3.isIndefiniteForm=false;_this3.longFormUsed=false;_this3.length=0;}return _this3;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalLengthBlock,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.error="Zero buffer length";return-1;}if(intBuffer[0]===0xFF){this.error="Length block 0xFF is reserved by standard";return-1;}//endregion
//region Check for length form type
this.isIndefiniteForm=intBuffer[0]===0x80;//endregion
//region Stop working in case of indefinite length form
if(this.isIndefiniteForm===true){this.blockLength=1;return inputOffset+this.blockLength;}//endregion
//region Check is long form of length encoding using
this.longFormUsed=!!(intBuffer[0]&0x80);//endregion
//region Stop working in case of short form of length value
if(this.longFormUsed===false){this.length=intBuffer[0];this.blockLength=1;return inputOffset+this.blockLength;}//endregion
//region Calculate length value in case of long form
var count=intBuffer[0]&0x7F;if(count>8)// Too big length value
{this.error="Too big integer";return-1;}if(count+1>intBuffer.length){this.error="End of input reached before message was fully decoded";return-1;}var lengthBufferView=new Uint8Array(count);for(var i=0;i<count;i++){lengthBufferView[i]=intBuffer[i+1];}if(lengthBufferView[count-1]===0x00)this.warnings.push("Needlessly long encoded length");this.length=(0,_pvutils.utilFromBase)(lengthBufferView,8);if(this.longFormUsed&&this.length<=127)this.warnings.push("Unneccesary usage of long length form");this.blockLength=count+1;//endregion
return inputOffset+this.blockLength;// Return current offset in input buffer
}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;//region Initial variables
var retBuf;var retView;//endregion
if(this.length>127)this.longFormUsed=true;if(this.isIndefiniteForm){retBuf=new ArrayBuffer(1);if(sizeOnly===false){retView=new Uint8Array(retBuf);retView[0]=0x80;}return retBuf;}if(this.longFormUsed===true){var encodedBuf=(0,_pvutils.utilToBase)(this.length,8);if(encodedBuf.byteLength>127){this.error="Too big length";return new ArrayBuffer(0);}retBuf=new ArrayBuffer(encodedBuf.byteLength+1);if(sizeOnly===true)return retBuf;var encodedView=new Uint8Array(encodedBuf);retView=new Uint8Array(retBuf);retView[0]=encodedBuf.byteLength|0x80;for(var i=0;i<encodedBuf.byteLength;i++){retView[i+1]=encodedView[i];}return retBuf;}retBuf=new ArrayBuffer(1);if(sizeOnly===false){retView=new Uint8Array(retBuf);retView[0]=this.length;}return retBuf;}//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */},{key:"toJSON",value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalLengthBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.blockName=this.constructor.blockName();object.isIndefiniteForm=this.isIndefiniteForm;object.longFormUsed=this.longFormUsed;object.length=this.length;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"lengthBlock";}}]);return LocalLengthBlock;}(LocalBaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of value block class
//**************************************************************************************
var LocalValueBlock=/*#__PURE__*/function(_LocalBaseBlock2){_inherits(LocalValueBlock,_LocalBaseBlock2);//**********************************************************************************
/**
	 * Constructor for "LocalValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalValueBlock(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalValueBlock);return _possibleConstructorReturn(this,_getPrototypeOf(LocalValueBlock).call(this,parameters));}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalValueBlock,[{key:"fromBER",//**********************************************************************************
//noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols,JSUnusedLocalSymbols
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){//region Throw an exception for a function which needs to be specified in extended classes
throw TypeError("User need to make a specific function in a class which extends \"LocalValueBlock\"");//endregion
}//**********************************************************************************
//noinspection JSUnusedLocalSymbols
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;//region Throw an exception for a function which needs to be specified in extended classes
throw TypeError("User need to make a specific function in a class which extends \"LocalValueBlock\"");//endregion
}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"valueBlock";}}]);return LocalValueBlock;}(LocalBaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic ASN.1 block class
//**************************************************************************************
var BaseBlock=/*#__PURE__*/function(_LocalBaseBlock3){_inherits(BaseBlock,_LocalBaseBlock3);//**********************************************************************************
/**
	 * Constructor for "BaseBlock" class
	 * @param {Object} [parameters={}]
	 * @property {Object} [primitiveSchema]
	 * @property {string} [name]
	 * @property {boolean} [optional]
	 * @param valueBlockType Type of value block
	 */function BaseBlock(){var _this4;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var valueBlockType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:LocalValueBlock;_classCallCheck(this,BaseBlock);_this4=_possibleConstructorReturn(this,_getPrototypeOf(BaseBlock).call(this,parameters));if("name"in parameters)_this4.name=parameters.name;if("optional"in parameters)_this4.optional=parameters.optional;if("primitiveSchema"in parameters)_this4.primitiveSchema=parameters.primitiveSchema;_this4.idBlock=new LocalIdentificationBlock(parameters);_this4.lenBlock=new LocalLengthBlock(parameters);_this4.valueBlock=new valueBlockType(parameters);return _this4;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(BaseBlock,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var retBuf;var idBlockBuf=this.idBlock.toBER(sizeOnly);var valueBlockSizeBuf=this.valueBlock.toBER(true);this.lenBlock.length=valueBlockSizeBuf.byteLength;var lenBlockBuf=this.lenBlock.toBER(sizeOnly);retBuf=(0,_pvutils.utilConcatBuf)(idBlockBuf,lenBlockBuf);var valueBlockBuf;if(sizeOnly===false)valueBlockBuf=this.valueBlock.toBER(sizeOnly);else valueBlockBuf=new ArrayBuffer(this.lenBlock.length);retBuf=(0,_pvutils.utilConcatBuf)(retBuf,valueBlockBuf);if(this.lenBlock.isIndefiniteForm===true){var indefBuf=new ArrayBuffer(2);if(sizeOnly===false){var indefView=new Uint8Array(indefBuf);indefView[0]=0x00;indefView[1]=0x00;}retBuf=(0,_pvutils.utilConcatBuf)(retBuf,indefBuf);}return retBuf;}//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */},{key:"toJSON",value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(BaseBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.idBlock=this.idBlock.toJSON();object.lenBlock=this.lenBlock.toJSON();object.valueBlock=this.valueBlock.toJSON();if("name"in this)object.name=this.name;if("optional"in this)object.optional=this.optional;if("primitiveSchema"in this)object.primitiveSchema=this.primitiveSchema.toJSON();return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BaseBlock";}}]);return BaseBlock;}(LocalBaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all PRIMITIVE types
//**************************************************************************************
exports.BaseBlock=BaseBlock;var LocalPrimitiveValueBlock=/*#__PURE__*/function(_LocalValueBlock){_inherits(LocalPrimitiveValueBlock,_LocalValueBlock);//**********************************************************************************
/**
	 * Constructor for "LocalPrimitiveValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueBeforeDecode]
	 */function LocalPrimitiveValueBlock(){var _this5;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalPrimitiveValueBlock);_this5=_possibleConstructorReturn(this,_getPrototypeOf(LocalPrimitiveValueBlock).call(this,parameters));//region Variables from "hexBlock" class
if("valueHex"in parameters)_this5.valueHex=parameters.valueHex.slice(0);else _this5.valueHex=new ArrayBuffer(0);_this5.isHexOnly=(0,_pvutils.getParametersValue)(parameters,"isHexOnly",true);//endregion
return _this5;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */_createClass(LocalPrimitiveValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.warnings.push("Zero buffer length");return inputOffset;}//endregion
//region Copy input buffer into internal buffer
this.valueHex=new ArrayBuffer(intBuffer.length);var valueHexView=new Uint8Array(this.valueHex);for(var i=0;i<intBuffer.length;i++){valueHexView[i]=intBuffer[i];}//endregion
this.blockLength=inputLength;return inputOffset+inputLength;}//**********************************************************************************
//noinspection JSUnusedLocalSymbols
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.valueHex.slice(0);}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalPrimitiveValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.valueHex=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);object.isHexOnly=this.isHexOnly;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"PrimitiveValueBlock";}}]);return LocalPrimitiveValueBlock;}(LocalValueBlock);//**************************************************************************************
var Primitive=/*#__PURE__*/function(_BaseBlock){_inherits(Primitive,_BaseBlock);//**********************************************************************************
/**
	 * Constructor for "Primitive" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function Primitive(){var _this6;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Primitive);_this6=_possibleConstructorReturn(this,_getPrototypeOf(Primitive).call(this,parameters,LocalPrimitiveValueBlock));_this6.idBlock.isConstructed=false;return _this6;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Primitive,null,[{key:"blockName",value:function blockName(){return"PRIMITIVE";}//**********************************************************************************
}]);return Primitive;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all CONSTRUCTED types
//**************************************************************************************
exports.Primitive=Primitive;var LocalConstructedValueBlock=/*#__PURE__*/function(_LocalValueBlock2){_inherits(LocalConstructedValueBlock,_LocalValueBlock2);//**********************************************************************************
/**
	 * Constructor for "LocalConstructedValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalConstructedValueBlock(){var _this7;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalConstructedValueBlock);_this7=_possibleConstructorReturn(this,_getPrototypeOf(LocalConstructedValueBlock).call(this,parameters));_this7.value=(0,_pvutils.getParametersValue)(parameters,"value",[]);_this7.isIndefiniteForm=(0,_pvutils.getParametersValue)(parameters,"isIndefiniteForm",false);return _this7;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */_createClass(LocalConstructedValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region Store initial offset and length
var initialOffset=inputOffset;var initialLength=inputLength;//endregion
//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.warnings.push("Zero buffer length");return inputOffset;}//endregion
//region Aux function
function checkLen(indefiniteLength,length){if(indefiniteLength===true)return 1;return length;}//endregion
var currentOffset=inputOffset;while(checkLen(this.isIndefiniteForm,inputLength)>0){var returnObject=LocalFromBER(inputBuffer,currentOffset,inputLength);if(returnObject.offset===-1){this.error=returnObject.result.error;this.warnings.concat(returnObject.result.warnings);return-1;}currentOffset=returnObject.offset;this.blockLength+=returnObject.result.blockLength;inputLength-=returnObject.result.blockLength;this.value.push(returnObject.result);if(this.isIndefiniteForm===true&&returnObject.result.constructor.blockName()===EndOfContent.blockName())break;}if(this.isIndefiniteForm===true){if(this.value[this.value.length-1].constructor.blockName()===EndOfContent.blockName())this.value.pop();else this.warnings.push("No EndOfContent block encoded");}//region Copy "inputBuffer" to "valueBeforeDecode"
this.valueBeforeDecode=inputBuffer.slice(initialOffset,initialOffset+initialLength);//endregion
return currentOffset;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var retBuf=new ArrayBuffer(0);for(var i=0;i<this.value.length;i++){var valueBuf=this.value[i].toBER(sizeOnly);retBuf=(0,_pvutils.utilConcatBuf)(retBuf,valueBuf);}return retBuf;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalConstructedValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.isIndefiniteForm=this.isIndefiniteForm;object.value=[];for(var i=0;i<this.value.length;i++){object.value.push(this.value[i].toJSON());}return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"ConstructedValueBlock";}}]);return LocalConstructedValueBlock;}(LocalValueBlock);//**************************************************************************************
var Constructed=/*#__PURE__*/function(_BaseBlock2){_inherits(Constructed,_BaseBlock2);//**********************************************************************************
/**
	 * Constructor for "Constructed" class
	 * @param {Object} [parameters={}]
	 */function Constructed(){var _this8;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Constructed);_this8=_possibleConstructorReturn(this,_getPrototypeOf(Constructed).call(this,parameters,LocalConstructedValueBlock));_this8.idBlock.isConstructed=true;return _this8;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Constructed,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){this.valueBlock.isIndefiniteForm=this.lenBlock.isIndefiniteForm;var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"CONSTRUCTED";}}]);return Constructed;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 EndOfContent type class
//**************************************************************************************
exports.Constructed=Constructed;var LocalEndOfContentValueBlock=/*#__PURE__*/function(_LocalValueBlock3){_inherits(LocalEndOfContentValueBlock,_LocalValueBlock3);//**********************************************************************************
/**
	 * Constructor for "LocalEndOfContentValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalEndOfContentValueBlock(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalEndOfContentValueBlock);return _possibleConstructorReturn(this,_getPrototypeOf(LocalEndOfContentValueBlock).call(this,parameters));}//**********************************************************************************
//noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number}
	 */_createClass(LocalEndOfContentValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region There is no "value block" for EndOfContent type and we need to return the same offset
return inputOffset;//endregion
}//**********************************************************************************
//noinspection JSUnusedLocalSymbols
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return new ArrayBuffer(0);}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */}],[{key:"blockName",value:function blockName(){return"EndOfContentValueBlock";}//**********************************************************************************
}]);return LocalEndOfContentValueBlock;}(LocalValueBlock);//**************************************************************************************
var EndOfContent=/*#__PURE__*/function(_BaseBlock3){_inherits(EndOfContent,_BaseBlock3);//**********************************************************************************
function EndOfContent(){var _this9;var paramaters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,EndOfContent);_this9=_possibleConstructorReturn(this,_getPrototypeOf(EndOfContent).call(this,paramaters,LocalEndOfContentValueBlock));_this9.idBlock.tagClass=1;// UNIVERSAL
_this9.idBlock.tagNumber=0;// EndOfContent
return _this9;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(EndOfContent,null,[{key:"blockName",value:function blockName(){return"EndOfContent";}//**********************************************************************************
}]);return EndOfContent;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Boolean type class
//**************************************************************************************
exports.EndOfContent=EndOfContent;var LocalBooleanValueBlock=/*#__PURE__*/function(_LocalValueBlock4){_inherits(LocalBooleanValueBlock,_LocalValueBlock4);//**********************************************************************************
/**
	 * Constructor for "LocalBooleanValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalBooleanValueBlock(){var _this10;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalBooleanValueBlock);_this10=_possibleConstructorReturn(this,_getPrototypeOf(LocalBooleanValueBlock).call(this,parameters));_this10.value=(0,_pvutils.getParametersValue)(parameters,"value",false);_this10.isHexOnly=(0,_pvutils.getParametersValue)(parameters,"isHexOnly",false);if("valueHex"in parameters)_this10.valueHex=parameters.valueHex.slice(0);else{_this10.valueHex=new ArrayBuffer(1);if(_this10.value===true){var view=new Uint8Array(_this10.valueHex);view[0]=0xFF;}}return _this10;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(LocalBooleanValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
if(inputLength>1)this.warnings.push("Boolean value encoded in more then 1 octet");this.isHexOnly=true;//region Copy input buffer to internal array
this.valueHex=new ArrayBuffer(intBuffer.length);var view=new Uint8Array(this.valueHex);for(var i=0;i<intBuffer.length;i++){view[i]=intBuffer[i];}//endregion
if(_pvutils.utilDecodeTC.call(this)!==0)this.value=true;else this.value=false;this.blockLength=inputLength;return inputOffset+inputLength;}//**********************************************************************************
//noinspection JSUnusedLocalSymbols
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.valueHex;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalBooleanValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.value;object.isHexOnly=this.isHexOnly;object.valueHex=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BooleanValueBlock";}}]);return LocalBooleanValueBlock;}(LocalValueBlock);//**************************************************************************************
var Boolean=/*#__PURE__*/function(_BaseBlock4){_inherits(Boolean,_BaseBlock4);//**********************************************************************************
/**
	 * Constructor for "Boolean" class
	 * @param {Object} [parameters={}]
	 */function Boolean(){var _this11;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Boolean);_this11=_possibleConstructorReturn(this,_getPrototypeOf(Boolean).call(this,parameters,LocalBooleanValueBlock));_this11.idBlock.tagClass=1;// UNIVERSAL
_this11.idBlock.tagNumber=1;// Boolean
return _this11;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Boolean,null,[{key:"blockName",value:function blockName(){return"Boolean";}//**********************************************************************************
}]);return Boolean;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Sequence and Set type classes
//**************************************************************************************
exports.Boolean=Boolean;var Sequence=/*#__PURE__*/function(_Constructed){_inherits(Sequence,_Constructed);//**********************************************************************************
/**
	 * Constructor for "Sequence" class
	 * @param {Object} [parameters={}]
	 */function Sequence(){var _this12;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Sequence);_this12=_possibleConstructorReturn(this,_getPrototypeOf(Sequence).call(this,parameters));_this12.idBlock.tagClass=1;// UNIVERSAL
_this12.idBlock.tagNumber=16;// Sequence
return _this12;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Sequence,null,[{key:"blockName",value:function blockName(){return"Sequence";}//**********************************************************************************
}]);return Sequence;}(Constructed);//**************************************************************************************
exports.Sequence=Sequence;var Set=/*#__PURE__*/function(_Constructed2){_inherits(Set,_Constructed2);//**********************************************************************************
/**
	 * Constructor for "Set" class
	 * @param {Object} [parameters={}]
	 */function Set(){var _this13;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Set);_this13=_possibleConstructorReturn(this,_getPrototypeOf(Set).call(this,parameters));_this13.idBlock.tagClass=1;// UNIVERSAL
_this13.idBlock.tagNumber=17;// Set
return _this13;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Set,null,[{key:"blockName",value:function blockName(){return"Set";}//**********************************************************************************
}]);return Set;}(Constructed);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Null type class
//**************************************************************************************
exports.Set=Set;var Null=/*#__PURE__*/function(_BaseBlock5){_inherits(Null,_BaseBlock5);//**********************************************************************************
/**
	 * Constructor for "Null" class
	 * @param {Object} [parameters={}]
	 */function Null(){var _this14;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Null);_this14=_possibleConstructorReturn(this,_getPrototypeOf(Null).call(this,parameters,LocalBaseBlock));// We will not have a call to "Null value block" because of specified "fromBER" and "toBER" functions
_this14.idBlock.tagClass=1;// UNIVERSAL
_this14.idBlock.tagNumber=5;// Null
return _this14;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Null,[{key:"fromBER",//**********************************************************************************
//noinspection JSUnusedLocalSymbols
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){if(this.lenBlock.length>0)this.warnings.push("Non-zero length of value block for Null type");if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;this.blockLength+=inputLength;if(inputOffset+inputLength>inputBuffer.byteLength){this.error="End of input reached before message was fully decoded (inconsistent offset and length values)";return-1;}return inputOffset+inputLength;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var retBuf=new ArrayBuffer(2);if(sizeOnly===true)return retBuf;var retView=new Uint8Array(retBuf);retView[0]=0x05;retView[1]=0x00;return retBuf;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"Null";}}]);return Null;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 OctetString type class
//**************************************************************************************
exports.Null=Null;var LocalOctetStringValueBlock=/*#__PURE__*/function(_LocalHexBlock2){_inherits(LocalOctetStringValueBlock,_LocalHexBlock2);//**********************************************************************************
/**
	 * Constructor for "LocalOctetStringValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function LocalOctetStringValueBlock(){var _this15;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalOctetStringValueBlock);_this15=_possibleConstructorReturn(this,_getPrototypeOf(LocalOctetStringValueBlock).call(this,parameters));_this15.isConstructed=(0,_pvutils.getParametersValue)(parameters,"isConstructed",false);return _this15;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(LocalOctetStringValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=0;if(this.isConstructed===true){this.isHexOnly=false;resultOffset=LocalConstructedValueBlock.prototype.fromBER.call(this,inputBuffer,inputOffset,inputLength);if(resultOffset===-1)return resultOffset;for(var i=0;i<this.value.length;i++){var currentBlockName=this.value[i].constructor.blockName();if(currentBlockName===EndOfContent.blockName()){if(this.isIndefiniteForm===true)break;else{this.error="EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";return-1;}}if(currentBlockName!==OctetString.blockName()){this.error="OCTET STRING may consists of OCTET STRINGs only";return-1;}}}else{this.isHexOnly=true;resultOffset=_get(_getPrototypeOf(LocalOctetStringValueBlock.prototype),"fromBER",this).call(this,inputBuffer,inputOffset,inputLength);this.blockLength=inputLength;}return resultOffset;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(this.isConstructed===true)return LocalConstructedValueBlock.prototype.toBER.call(this,sizeOnly);var retBuf=new ArrayBuffer(this.valueHex.byteLength);if(sizeOnly===true)return retBuf;if(this.valueHex.byteLength===0)return retBuf;retBuf=this.valueHex.slice(0);return retBuf;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalOctetStringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.isConstructed=this.isConstructed;object.isHexOnly=this.isHexOnly;object.valueHex=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"OctetStringValueBlock";}}]);return LocalOctetStringValueBlock;}(LocalHexBlock(LocalConstructedValueBlock));//**************************************************************************************
var OctetString=/*#__PURE__*/function(_BaseBlock6){_inherits(OctetString,_BaseBlock6);//**********************************************************************************
/**
	 * Constructor for "OctetString" class
	 * @param {Object} [parameters={}]
	 */function OctetString(){var _this16;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,OctetString);_this16=_possibleConstructorReturn(this,_getPrototypeOf(OctetString).call(this,parameters,LocalOctetStringValueBlock));_this16.idBlock.tagClass=1;// UNIVERSAL
_this16.idBlock.tagNumber=4;// OctetString
return _this16;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(OctetString,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){this.valueBlock.isConstructed=this.idBlock.isConstructed;this.valueBlock.isIndefiniteForm=this.lenBlock.isIndefiniteForm;//region Ability to encode empty OCTET STRING
if(inputLength===0){if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;return inputOffset;}//endregion
return _get(_getPrototypeOf(OctetString.prototype),"fromBER",this).call(this,inputBuffer,inputOffset,inputLength);}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"isEqual",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Checking that two OCTETSTRINGs are equal
	 * @param {OctetString} octetString
	 */value:function isEqual(octetString){//region Check input type
if(octetString instanceof OctetString===false)return false;//endregion
//region Compare two JSON strings
if(JSON.stringify(this)!==JSON.stringify(octetString))return false;//endregion
return true;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"OctetString";}}]);return OctetString;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 BitString type class
//**************************************************************************************
exports.OctetString=OctetString;var LocalBitStringValueBlock=/*#__PURE__*/function(_LocalHexBlock3){_inherits(LocalBitStringValueBlock,_LocalHexBlock3);//**********************************************************************************
/**
	 * Constructor for "LocalBitStringValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function LocalBitStringValueBlock(){var _this17;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalBitStringValueBlock);_this17=_possibleConstructorReturn(this,_getPrototypeOf(LocalBitStringValueBlock).call(this,parameters));_this17.unusedBits=(0,_pvutils.getParametersValue)(parameters,"unusedBits",0);_this17.isConstructed=(0,_pvutils.getParametersValue)(parameters,"isConstructed",false);_this17.blockLength=_this17.valueHex.byteLength;return _this17;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(LocalBitStringValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){//region Ability to decode zero-length BitString value
if(inputLength===0)return inputOffset;//endregion
var resultOffset=-1;//region If the BISTRING supposed to be a constructed value
if(this.isConstructed===true){resultOffset=LocalConstructedValueBlock.prototype.fromBER.call(this,inputBuffer,inputOffset,inputLength);if(resultOffset===-1)return resultOffset;for(var i=0;i<this.value.length;i++){var currentBlockName=this.value[i].constructor.blockName();if(currentBlockName===EndOfContent.blockName()){if(this.isIndefiniteForm===true)break;else{this.error="EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";return-1;}}if(currentBlockName!==BitString.blockName()){this.error="BIT STRING may consists of BIT STRINGs only";return-1;}if(this.unusedBits>0&&this.value[i].valueBlock.unusedBits>0){this.error="Usign of \"unused bits\" inside constructive BIT STRING allowed for least one only";return-1;}this.unusedBits=this.value[i].valueBlock.unusedBits;if(this.unusedBits>7){this.error="Unused bits for BitString must be in range 0-7";return-1;}}return resultOffset;}//endregion
//region If the BitString supposed to be a primitive value
//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);this.unusedBits=intBuffer[0];if(this.unusedBits>7){this.error="Unused bits for BitString must be in range 0-7";return-1;}//region Copy input buffer to internal buffer
this.valueHex=new ArrayBuffer(intBuffer.length-1);var view=new Uint8Array(this.valueHex);for(var _i3=0;_i3<inputLength-1;_i3++){view[_i3]=intBuffer[_i3+1];}//endregion
this.blockLength=intBuffer.length;return inputOffset+inputLength;//endregion
}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(this.isConstructed===true)return LocalConstructedValueBlock.prototype.toBER.call(this,sizeOnly);if(sizeOnly===true)return new ArrayBuffer(this.valueHex.byteLength+1);if(this.valueHex.byteLength===0)return new ArrayBuffer(0);var curView=new Uint8Array(this.valueHex);var retBuf=new ArrayBuffer(this.valueHex.byteLength+1);var retView=new Uint8Array(retBuf);retView[0]=this.unusedBits;for(var i=0;i<this.valueHex.byteLength;i++){retView[i+1]=curView[i];}return retBuf;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalBitStringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.unusedBits=this.unusedBits;object.isConstructed=this.isConstructed;object.isHexOnly=this.isHexOnly;object.valueHex=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BitStringValueBlock";}}]);return LocalBitStringValueBlock;}(LocalHexBlock(LocalConstructedValueBlock));//**************************************************************************************
var BitString=/*#__PURE__*/function(_BaseBlock7){_inherits(BitString,_BaseBlock7);//**********************************************************************************
/**
	 * Constructor for "BitString" class
	 * @param {Object} [parameters={}]
	 */function BitString(){var _this18;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,BitString);_this18=_possibleConstructorReturn(this,_getPrototypeOf(BitString).call(this,parameters,LocalBitStringValueBlock));_this18.idBlock.tagClass=1;// UNIVERSAL
_this18.idBlock.tagNumber=3;// BitString
return _this18;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(BitString,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){//region Ability to encode empty BitString
if(inputLength===0)return inputOffset;//endregion
this.valueBlock.isConstructed=this.idBlock.isConstructed;this.valueBlock.isIndefiniteForm=this.lenBlock.isIndefiniteForm;return _get(_getPrototypeOf(BitString.prototype),"fromBER",this).call(this,inputBuffer,inputOffset,inputLength);}//**********************************************************************************
/**
	 * Checking that two BITSTRINGs are equal
	 * @param {BitString} bitString
	 */},{key:"isEqual",value:function isEqual(bitString){//region Check input type
if(bitString instanceof BitString===false)return false;//endregion
//region Compare two JSON strings
if(JSON.stringify(this)!==JSON.stringify(bitString))return false;//endregion
return true;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BitString";}}]);return BitString;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Integer type class
//**************************************************************************************
/**
 * @extends LocalValueBlock
 */exports.BitString=BitString;var LocalIntegerValueBlock=/*#__PURE__*/function(_LocalHexBlock4){_inherits(LocalIntegerValueBlock,_LocalHexBlock4);//**********************************************************************************
/**
	 * Constructor for "LocalIntegerValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function LocalIntegerValueBlock(){var _this19;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalIntegerValueBlock);_this19=_possibleConstructorReturn(this,_getPrototypeOf(LocalIntegerValueBlock).call(this,parameters));if("value"in parameters)_this19.valueDec=parameters.value;return _this19;}//**********************************************************************************
/**
	 * Setter for "valueHex"
	 * @param {ArrayBuffer} _value
	 */_createClass(LocalIntegerValueBlock,[{key:"fromDER",//**********************************************************************************
/**
	 * Base function for converting block from DER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 DER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 DER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @param {number} [expectedLength=0] Expected length of converted "valueHex" buffer
	 * @returns {number} Offset after least decoded byte
	 */value:function fromDER(inputBuffer,inputOffset,inputLength){var expectedLength=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var offset=this.fromBER(inputBuffer,inputOffset,inputLength);if(offset===-1)return offset;var view=new Uint8Array(this._valueHex);if(view[0]===0x00&&(view[1]&0x80)!==0){var updatedValueHex=new ArrayBuffer(this._valueHex.byteLength-1);var updatedView=new Uint8Array(updatedValueHex);updatedView.set(new Uint8Array(this._valueHex,1,this._valueHex.byteLength-1));this._valueHex=updatedValueHex.slice(0);}else{if(expectedLength!==0){if(this._valueHex.byteLength<expectedLength){if(expectedLength-this._valueHex.byteLength>1)expectedLength=this._valueHex.byteLength+1;var _updatedValueHex=new ArrayBuffer(expectedLength);var _updatedView=new Uint8Array(_updatedValueHex);_updatedView.set(view,expectedLength-this._valueHex.byteLength);this._valueHex=_updatedValueHex.slice(0);}}}return offset;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toDER",value:function toDER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var view=new Uint8Array(this._valueHex);switch(true){case(view[0]&0x80)!==0:{var updatedValueHex=new ArrayBuffer(this._valueHex.byteLength+1);var updatedView=new Uint8Array(updatedValueHex);updatedView[0]=0x00;updatedView.set(view,1);this._valueHex=updatedValueHex.slice(0);}break;case view[0]===0x00&&(view[1]&0x80)===0:{var _updatedValueHex2=new ArrayBuffer(this._valueHex.byteLength-1);var _updatedView2=new Uint8Array(_updatedValueHex2);_updatedView2.set(new Uint8Array(this._valueHex,1,this._valueHex.byteLength-1));this._valueHex=_updatedValueHex2.slice(0);}break;default:}return this.toBER(sizeOnly);}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */},{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=_get(_getPrototypeOf(LocalIntegerValueBlock.prototype),"fromBER",this).call(this,inputBuffer,inputOffset,inputLength);if(resultOffset===-1)return resultOffset;this.blockLength=inputLength;return inputOffset+inputLength;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;//noinspection JSCheckFunctionSignatures
return this.valueHex.slice(0);}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalIntegerValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.valueDec=this.valueDec;return object;}//**********************************************************************************
/**
	 * Convert current value to decimal string representation
	 */},{key:"toString",value:function toString(){//region Aux functions
function viewAdd(first,second){//region Initial variables
var c=new Uint8Array([0]);var firstView=new Uint8Array(first);var secondView=new Uint8Array(second);var firstViewCopy=firstView.slice(0);var firstViewCopyLength=firstViewCopy.length-1;var secondViewCopy=secondView.slice(0);var secondViewCopyLength=secondViewCopy.length-1;var value=0;var max=secondViewCopyLength<firstViewCopyLength?firstViewCopyLength:secondViewCopyLength;var counter=0;//endregion
for(var i=max;i>=0;i--,counter++){switch(true){case counter<secondViewCopy.length:value=firstViewCopy[firstViewCopyLength-counter]+secondViewCopy[secondViewCopyLength-counter]+c[0];break;default:value=firstViewCopy[firstViewCopyLength-counter]+c[0];}c[0]=value/10;switch(true){case counter>=firstViewCopy.length:firstViewCopy=(0,_pvutils.utilConcatView)(new Uint8Array([value%10]),firstViewCopy);break;default:firstViewCopy[firstViewCopyLength-counter]=value%10;}}if(c[0]>0)firstViewCopy=(0,_pvutils.utilConcatView)(c,firstViewCopy);return firstViewCopy.slice(0);}function power2(n){if(n>=powers2.length){for(var p=powers2.length;p<=n;p++){var c=new Uint8Array([0]);var _digits=powers2[p-1].slice(0);for(var i=_digits.length-1;i>=0;i--){var newValue=new Uint8Array([(_digits[i]<<1)+c[0]]);c[0]=newValue[0]/10;_digits[i]=newValue[0]%10;}if(c[0]>0)_digits=(0,_pvutils.utilConcatView)(c,_digits);powers2.push(_digits);}}return powers2[n];}function viewSub(first,second){//region Initial variables
var b=0;var firstView=new Uint8Array(first);var secondView=new Uint8Array(second);var firstViewCopy=firstView.slice(0);var firstViewCopyLength=firstViewCopy.length-1;var secondViewCopy=secondView.slice(0);var secondViewCopyLength=secondViewCopy.length-1;var value;var counter=0;//endregion
for(var i=secondViewCopyLength;i>=0;i--,counter++){value=firstViewCopy[firstViewCopyLength-counter]-secondViewCopy[secondViewCopyLength-counter]-b;switch(true){case value<0:b=1;firstViewCopy[firstViewCopyLength-counter]=value+10;break;default:b=0;firstViewCopy[firstViewCopyLength-counter]=value;}}if(b>0){for(var _i4=firstViewCopyLength-secondViewCopyLength+1;_i4>=0;_i4--,counter++){value=firstViewCopy[firstViewCopyLength-counter]-b;if(value<0){b=1;firstViewCopy[firstViewCopyLength-counter]=value+10;}else{b=0;firstViewCopy[firstViewCopyLength-counter]=value;break;}}}return firstViewCopy.slice();}//endregion
//region Initial variables
var firstBit=this._valueHex.byteLength*8-1;var digits=new Uint8Array(this._valueHex.byteLength*8/3);var bitNumber=0;var currentByte;var asn1View=new Uint8Array(this._valueHex);var result="";var flag=false;//endregion
//region Calculate number
for(var byteNumber=this._valueHex.byteLength-1;byteNumber>=0;byteNumber--){currentByte=asn1View[byteNumber];for(var i=0;i<8;i++){if((currentByte&1)===1){switch(bitNumber){case firstBit:digits=viewSub(power2(bitNumber),digits);result="-";break;default:digits=viewAdd(digits,power2(bitNumber));}}bitNumber++;currentByte>>=1;}}//endregion
//region Print number
for(var _i5=0;_i5<digits.length;_i5++){if(digits[_i5])flag=true;if(flag)result+=digitsString.charAt(digits[_i5]);}if(flag===false)result+=digitsString.charAt(0);//endregion
return result;}//**********************************************************************************
},{key:"valueHex",set:function set(_value){this._valueHex=_value.slice(0);if(_value.byteLength>=4){this.warnings.push("Too big Integer for decoding, hex only");this.isHexOnly=true;this._valueDec=0;}else{this.isHexOnly=false;if(_value.byteLength>0)this._valueDec=_pvutils.utilDecodeTC.call(this);}}//**********************************************************************************
/**
	 * Getter for "valueHex"
	 * @returns {ArrayBuffer}
	 */,get:function get(){return this._valueHex;}//**********************************************************************************
/**
	 * Getter for "valueDec"
	 * @param {number} _value
	 */},{key:"valueDec",set:function set(_value){this._valueDec=_value;this.isHexOnly=false;this._valueHex=(0,_pvutils.utilEncodeTC)(_value);}//**********************************************************************************
/**
	 * Getter for "valueDec"
	 * @returns {number}
	 */,get:function get(){return this._valueDec;}}],[{key:"blockName",value:function blockName(){return"IntegerValueBlock";}}]);return LocalIntegerValueBlock;}(LocalHexBlock(LocalValueBlock));//**************************************************************************************
var Integer=/*#__PURE__*/function(_BaseBlock8){_inherits(Integer,_BaseBlock8);//**********************************************************************************
/**
	 * Constructor for "Integer" class
	 * @param {Object} [parameters={}]
	 */function Integer(){var _this20;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Integer);_this20=_possibleConstructorReturn(this,_getPrototypeOf(Integer).call(this,parameters,LocalIntegerValueBlock));_this20.idBlock.tagClass=1;// UNIVERSAL
_this20.idBlock.tagNumber=2;// Integer
return _this20;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Integer,[{key:"isEqual",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Compare two Integer object, or Integer and ArrayBuffer objects
	 * @param {!Integer|ArrayBuffer} otherValue
	 * @returns {boolean}
	 */value:function isEqual(otherValue){if(otherValue instanceof Integer){if(this.valueBlock.isHexOnly&&otherValue.valueBlock.isHexOnly)// Compare two ArrayBuffers
return(0,_pvutils.isEqualBuffer)(this.valueBlock.valueHex,otherValue.valueBlock.valueHex);if(this.valueBlock.isHexOnly===otherValue.valueBlock.isHexOnly)return this.valueBlock.valueDec===otherValue.valueBlock.valueDec;return false;}if(otherValue instanceof ArrayBuffer)return(0,_pvutils.isEqualBuffer)(this.valueBlock.valueHex,otherValue);return false;}//**********************************************************************************
/**
	 * Convert current Integer value from BER into DER format
	 * @returns {Integer}
	 */},{key:"convertToDER",value:function convertToDER(){var integer=new Integer({valueHex:this.valueBlock.valueHex});integer.valueBlock.toDER();return integer;}//**********************************************************************************
/**
	 * Convert current Integer value from DER to BER format
	 * @returns {Integer}
	 */},{key:"convertFromDER",value:function convertFromDER(){var expectedLength=this.valueBlock.valueHex.byteLength%2?this.valueBlock.valueHex.byteLength+1:this.valueBlock.valueHex.byteLength;var integer=new Integer({valueHex:this.valueBlock.valueHex});integer.valueBlock.fromDER(integer.valueBlock.valueHex,0,integer.valueBlock.valueHex.byteLength,expectedLength);return integer;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"Integer";}}]);return Integer;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Enumerated type class
//**************************************************************************************
exports.Integer=Integer;var Enumerated=/*#__PURE__*/function(_Integer){_inherits(Enumerated,_Integer);//**********************************************************************************
/**
	 * Constructor for "Enumerated" class
	 * @param {Object} [parameters={}]
	 */function Enumerated(){var _this21;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Enumerated);_this21=_possibleConstructorReturn(this,_getPrototypeOf(Enumerated).call(this,parameters));_this21.idBlock.tagClass=1;// UNIVERSAL
_this21.idBlock.tagNumber=10;// Enumerated
return _this21;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Enumerated,null,[{key:"blockName",value:function blockName(){return"Enumerated";}//**********************************************************************************
}]);return Enumerated;}(Integer);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 ObjectIdentifier type class
//**************************************************************************************
exports.Enumerated=Enumerated;var LocalSidValueBlock=/*#__PURE__*/function(_LocalHexBlock5){_inherits(LocalSidValueBlock,_LocalHexBlock5);//**********************************************************************************
/**
	 * Constructor for "LocalSidValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {number} [valueDec]
	 * @property {boolean} [isFirstSid]
	 */function LocalSidValueBlock(){var _this22;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalSidValueBlock);_this22=_possibleConstructorReturn(this,_getPrototypeOf(LocalSidValueBlock).call(this,parameters));_this22.valueDec=(0,_pvutils.getParametersValue)(parameters,"valueDec",-1);_this22.isFirstSid=(0,_pvutils.getParametersValue)(parameters,"isFirstSid",false);return _this22;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalSidValueBlock,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){if(inputLength===0)return inputOffset;//region Basic check for parameters
//noinspection JSCheckFunctionSignatures
if((0,_pvutils.checkBufferParams)(this,inputBuffer,inputOffset,inputLength)===false)return-1;//endregion
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);this.valueHex=new ArrayBuffer(inputLength);var view=new Uint8Array(this.valueHex);for(var i=0;i<inputLength;i++){view[i]=intBuffer[i]&0x7F;this.blockLength++;if((intBuffer[i]&0x80)===0x00)break;}//region Ajust size of valueHex buffer
var tempValueHex=new ArrayBuffer(this.blockLength);var tempView=new Uint8Array(tempValueHex);for(var _i6=0;_i6<this.blockLength;_i6++){tempView[_i6]=view[_i6];}//noinspection JSCheckFunctionSignatures
this.valueHex=tempValueHex.slice(0);view=new Uint8Array(this.valueHex);//endregion
if((intBuffer[this.blockLength-1]&0x80)!==0x00){this.error="End of input reached before message was fully decoded";return-1;}if(view[0]===0x00)this.warnings.push("Needlessly long format of SID encoding");if(this.blockLength<=8)this.valueDec=(0,_pvutils.utilFromBase)(view,7);else{this.isHexOnly=true;this.warnings.push("Too big SID for decoding, hex only");}return inputOffset+this.blockLength;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;//region Initial variables
var retBuf;var retView;//endregion
if(this.isHexOnly){if(sizeOnly===true)return new ArrayBuffer(this.valueHex.byteLength);var curView=new Uint8Array(this.valueHex);retBuf=new ArrayBuffer(this.blockLength);retView=new Uint8Array(retBuf);for(var i=0;i<this.blockLength-1;i++){retView[i]=curView[i]|0x80;}retView[this.blockLength-1]=curView[this.blockLength-1];return retBuf;}var encodedBuf=(0,_pvutils.utilToBase)(this.valueDec,7);if(encodedBuf.byteLength===0){this.error="Error during encoding SID value";return new ArrayBuffer(0);}retBuf=new ArrayBuffer(encodedBuf.byteLength);if(sizeOnly===false){var encodedView=new Uint8Array(encodedBuf);retView=new Uint8Array(retBuf);for(var _i7=0;_i7<encodedBuf.byteLength-1;_i7++){retView[_i7]=encodedView[_i7]|0x80;}retView[encodedBuf.byteLength-1]=encodedView[encodedBuf.byteLength-1];}return retBuf;}//**********************************************************************************
/**
	 * Create string representation of current SID block
	 * @returns {string}
	 */},{key:"toString",value:function toString(){var result="";if(this.isHexOnly===true)result=(0,_pvutils.bufferToHexCodes)(this.valueHex,0,this.valueHex.byteLength);else{if(this.isFirstSid){var sidValue=this.valueDec;if(this.valueDec<=39)result="0.";else{if(this.valueDec<=79){result="1.";sidValue-=40;}else{result="2.";sidValue-=80;}}result+=sidValue.toString();}else result=this.valueDec.toString();}return result;}//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */},{key:"toJSON",value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalSidValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.valueDec=this.valueDec;object.isFirstSid=this.isFirstSid;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"sidBlock";}}]);return LocalSidValueBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
var LocalObjectIdentifierValueBlock=/*#__PURE__*/function(_LocalValueBlock5){_inherits(LocalObjectIdentifierValueBlock,_LocalValueBlock5);//**********************************************************************************
/**
	 * Constructor for "LocalObjectIdentifierValueBlock" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function LocalObjectIdentifierValueBlock(){var _this23;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalObjectIdentifierValueBlock);_this23=_possibleConstructorReturn(this,_getPrototypeOf(LocalObjectIdentifierValueBlock).call(this,parameters));_this23.fromString((0,_pvutils.getParametersValue)(parameters,"value",""));return _this23;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(LocalObjectIdentifierValueBlock,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=inputOffset;while(inputLength>0){var sidBlock=new LocalSidValueBlock();resultOffset=sidBlock.fromBER(inputBuffer,resultOffset,inputLength);if(resultOffset===-1){this.blockLength=0;this.error=sidBlock.error;return resultOffset;}if(this.value.length===0)sidBlock.isFirstSid=true;this.blockLength+=sidBlock.blockLength;inputLength-=sidBlock.blockLength;this.value.push(sidBlock);}return resultOffset;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var retBuf=new ArrayBuffer(0);for(var i=0;i<this.value.length;i++){var valueBuf=this.value[i].toBER(sizeOnly);if(valueBuf.byteLength===0){this.error=this.value[i].error;return new ArrayBuffer(0);}retBuf=(0,_pvutils.utilConcatBuf)(retBuf,valueBuf);}return retBuf;}//**********************************************************************************
/**
	 * Create "LocalObjectIdentifierValueBlock" class from string
	 * @param {string} string Input string to convert from
	 * @returns {boolean}
	 */},{key:"fromString",value:function fromString(string){this.value=[];// Clear existing SID values
var pos1=0;var pos2=0;var sid="";var flag=false;do{pos2=string.indexOf(".",pos1);if(pos2===-1)sid=string.substr(pos1);else sid=string.substr(pos1,pos2-pos1);pos1=pos2+1;if(flag){var sidBlock=this.value[0];var plus=0;switch(sidBlock.valueDec){case 0:break;case 1:plus=40;break;case 2:plus=80;break;default:this.value=[];// clear SID array
return false;// ???
}var parsedSID=parseInt(sid,10);if(isNaN(parsedSID))return true;sidBlock.valueDec=parsedSID+plus;flag=false;}else{var _sidBlock=new LocalSidValueBlock();_sidBlock.valueDec=parseInt(sid,10);if(isNaN(_sidBlock.valueDec))return true;if(this.value.length===0){_sidBlock.isFirstSid=true;flag=true;}this.value.push(_sidBlock);}}while(pos2!==-1);return true;}//**********************************************************************************
/**
	 * Converts "LocalObjectIdentifierValueBlock" class to string
	 * @returns {string}
	 */},{key:"toString",value:function toString(){var result="";var isHexOnly=false;for(var i=0;i<this.value.length;i++){isHexOnly=this.value[i].isHexOnly;var sidStr=this.value[i].toString();if(i!==0)result="".concat(result,".");if(isHexOnly){sidStr="{".concat(sidStr,"}");if(this.value[i].isFirstSid)result="2.{".concat(sidStr," - 80}");else result+=sidStr;}else result+=sidStr;}return result;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalObjectIdentifierValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.toString();object.sidArray=[];for(var i=0;i<this.value.length;i++){object.sidArray.push(this.value[i].toJSON());}return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"ObjectIdentifierValueBlock";}}]);return LocalObjectIdentifierValueBlock;}(LocalValueBlock);//**************************************************************************************
/**
 * @extends BaseBlock
 */var ObjectIdentifier=/*#__PURE__*/function(_BaseBlock9){_inherits(ObjectIdentifier,_BaseBlock9);//**********************************************************************************
/**
	 * Constructor for "ObjectIdentifier" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function ObjectIdentifier(){var _this24;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,ObjectIdentifier);_this24=_possibleConstructorReturn(this,_getPrototypeOf(ObjectIdentifier).call(this,parameters,LocalObjectIdentifierValueBlock));_this24.idBlock.tagClass=1;// UNIVERSAL
_this24.idBlock.tagNumber=6;// OBJECT IDENTIFIER
return _this24;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(ObjectIdentifier,null,[{key:"blockName",value:function blockName(){return"ObjectIdentifier";}//**********************************************************************************
}]);return ObjectIdentifier;}(BaseBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all string's classes
//**************************************************************************************
exports.ObjectIdentifier=ObjectIdentifier;var LocalUtf8StringValueBlock=/*#__PURE__*/function(_LocalHexBlock6){_inherits(LocalUtf8StringValueBlock,_LocalHexBlock6);//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Constructor for "LocalUtf8StringValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalUtf8StringValueBlock(){var _this25;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalUtf8StringValueBlock);_this25=_possibleConstructorReturn(this,_getPrototypeOf(LocalUtf8StringValueBlock).call(this,parameters));_this25.isHexOnly=true;_this25.value="";// String representation of decoded ArrayBuffer
return _this25;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalUtf8StringValueBlock,[{key:"toJSON",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalUtf8StringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.value;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"Utf8StringValueBlock";}}]);return LocalUtf8StringValueBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
/**
 * @extends BaseBlock
 */var Utf8String=/*#__PURE__*/function(_BaseBlock10){_inherits(Utf8String,_BaseBlock10);//**********************************************************************************
/**
	 * Constructor for "Utf8String" class
	 * @param {Object} [parameters={}]
	 * @property {ArrayBuffer} [valueHex]
	 */function Utf8String(){var _this26;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Utf8String);_this26=_possibleConstructorReturn(this,_getPrototypeOf(Utf8String).call(this,parameters,LocalUtf8StringValueBlock));if("value"in parameters)_this26.fromString(parameters.value);_this26.idBlock.tagClass=1;// UNIVERSAL
_this26.idBlock.tagNumber=12;// Utf8String
return _this26;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Utf8String,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){this.valueBlock.value=String.fromCharCode.apply(null,new Uint8Array(inputBuffer));try{//noinspection JSDeprecatedSymbols
this.valueBlock.value=decodeURIComponent(escape(this.valueBlock.value));}catch(ex){this.warnings.push("Error during \"decodeURIComponent\": ".concat(ex,", using raw string"));}}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){//noinspection JSDeprecatedSymbols
var str=unescape(encodeURIComponent(inputString));var strLen=str.length;this.valueBlock.valueHex=new ArrayBuffer(strLen);var view=new Uint8Array(this.valueBlock.valueHex);for(var i=0;i<strLen;i++){view[i]=str.charCodeAt(i);}this.valueBlock.value=inputString;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"Utf8String";}}]);return Utf8String;}(BaseBlock);//**************************************************************************************
/**
 * @extends LocalBaseBlock
 * @extends LocalHexBlock
 */exports.Utf8String=Utf8String;var LocalBmpStringValueBlock=/*#__PURE__*/function(_LocalHexBlock7){_inherits(LocalBmpStringValueBlock,_LocalHexBlock7);//**********************************************************************************
/**
	 * Constructor for "LocalBmpStringValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalBmpStringValueBlock(){var _this27;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalBmpStringValueBlock);_this27=_possibleConstructorReturn(this,_getPrototypeOf(LocalBmpStringValueBlock).call(this,parameters));_this27.isHexOnly=true;_this27.value="";return _this27;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalBmpStringValueBlock,[{key:"toJSON",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalBmpStringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.value;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BmpStringValueBlock";}}]);return LocalBmpStringValueBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
/**
 * @extends BaseBlock
 */var BmpString=/*#__PURE__*/function(_BaseBlock11){_inherits(BmpString,_BaseBlock11);//**********************************************************************************
/**
	 * Constructor for "BmpString" class
	 * @param {Object} [parameters={}]
	 */function BmpString(){var _this28;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,BmpString);_this28=_possibleConstructorReturn(this,_getPrototypeOf(BmpString).call(this,parameters,LocalBmpStringValueBlock));if("value"in parameters)_this28.fromString(parameters.value);_this28.idBlock.tagClass=1;// UNIVERSAL
_this28.idBlock.tagNumber=30;// BmpString
return _this28;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(BmpString,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){//noinspection JSCheckFunctionSignatures
var copyBuffer=inputBuffer.slice(0);var valueView=new Uint8Array(copyBuffer);for(var i=0;i<valueView.length;i+=2){var temp=valueView[i];valueView[i]=valueView[i+1];valueView[i+1]=temp;}this.valueBlock.value=String.fromCharCode.apply(null,new Uint16Array(copyBuffer));}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){var strLength=inputString.length;this.valueBlock.valueHex=new ArrayBuffer(strLength*2);var valueHexView=new Uint8Array(this.valueBlock.valueHex);for(var i=0;i<strLength;i++){var codeBuf=(0,_pvutils.utilToBase)(inputString.charCodeAt(i),8);var codeView=new Uint8Array(codeBuf);if(codeView.length>2)continue;var dif=2-codeView.length;for(var j=codeView.length-1;j>=0;j--){valueHexView[i*2+j+dif]=codeView[j];}}this.valueBlock.value=inputString;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"BmpString";}}]);return BmpString;}(BaseBlock);//**************************************************************************************
exports.BmpString=BmpString;var LocalUniversalStringValueBlock=/*#__PURE__*/function(_LocalHexBlock8){_inherits(LocalUniversalStringValueBlock,_LocalHexBlock8);//**********************************************************************************
/**
	 * Constructor for "LocalUniversalStringValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalUniversalStringValueBlock(){var _this29;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalUniversalStringValueBlock);_this29=_possibleConstructorReturn(this,_getPrototypeOf(LocalUniversalStringValueBlock).call(this,parameters));_this29.isHexOnly=true;_this29.value="";return _this29;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalUniversalStringValueBlock,[{key:"toJSON",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalUniversalStringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.value;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"UniversalStringValueBlock";}}]);return LocalUniversalStringValueBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
/**
 * @extends BaseBlock
 */var UniversalString=/*#__PURE__*/function(_BaseBlock12){_inherits(UniversalString,_BaseBlock12);//**********************************************************************************
/**
	 * Constructor for "UniversalString" class
	 * @param {Object} [parameters={}]
	 */function UniversalString(){var _this30;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,UniversalString);_this30=_possibleConstructorReturn(this,_getPrototypeOf(UniversalString).call(this,parameters,LocalUniversalStringValueBlock));if("value"in parameters)_this30.fromString(parameters.value);_this30.idBlock.tagClass=1;// UNIVERSAL
_this30.idBlock.tagNumber=28;// UniversalString
return _this30;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(UniversalString,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){//noinspection JSCheckFunctionSignatures
var copyBuffer=inputBuffer.slice(0);var valueView=new Uint8Array(copyBuffer);for(var i=0;i<valueView.length;i+=4){valueView[i]=valueView[i+3];valueView[i+1]=valueView[i+2];valueView[i+2]=0x00;valueView[i+3]=0x00;}this.valueBlock.value=String.fromCharCode.apply(null,new Uint32Array(copyBuffer));}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){var strLength=inputString.length;this.valueBlock.valueHex=new ArrayBuffer(strLength*4);var valueHexView=new Uint8Array(this.valueBlock.valueHex);for(var i=0;i<strLength;i++){var codeBuf=(0,_pvutils.utilToBase)(inputString.charCodeAt(i),8);var codeView=new Uint8Array(codeBuf);if(codeView.length>4)continue;var dif=4-codeView.length;for(var j=codeView.length-1;j>=0;j--){valueHexView[i*4+j+dif]=codeView[j];}}this.valueBlock.value=inputString;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"UniversalString";}}]);return UniversalString;}(BaseBlock);//**************************************************************************************
exports.UniversalString=UniversalString;var LocalSimpleStringValueBlock=/*#__PURE__*/function(_LocalHexBlock9){_inherits(LocalSimpleStringValueBlock,_LocalHexBlock9);//**********************************************************************************
/**
	 * Constructor for "LocalSimpleStringValueBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalSimpleStringValueBlock(){var _this31;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalSimpleStringValueBlock);_this31=_possibleConstructorReturn(this,_getPrototypeOf(LocalSimpleStringValueBlock).call(this,parameters));_this31.value="";_this31.isHexOnly=true;return _this31;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalSimpleStringValueBlock,[{key:"toJSON",//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(LocalSimpleStringValueBlock.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.value=this.value;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"SimpleStringValueBlock";}}]);return LocalSimpleStringValueBlock;}(LocalHexBlock(LocalBaseBlock));//**************************************************************************************
/**
 * @extends BaseBlock
 */var LocalSimpleStringBlock=/*#__PURE__*/function(_BaseBlock13){_inherits(LocalSimpleStringBlock,_BaseBlock13);//**********************************************************************************
/**
	 * Constructor for "LocalSimpleStringBlock" class
	 * @param {Object} [parameters={}]
	 */function LocalSimpleStringBlock(){var _this32;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,LocalSimpleStringBlock);_this32=_possibleConstructorReturn(this,_getPrototypeOf(LocalSimpleStringBlock).call(this,parameters,LocalSimpleStringValueBlock));if("value"in parameters)_this32.fromString(parameters.value);return _this32;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(LocalSimpleStringBlock,[{key:"fromBER",//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){this.valueBlock.value=String.fromCharCode.apply(null,new Uint8Array(inputBuffer));}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){var strLen=inputString.length;this.valueBlock.valueHex=new ArrayBuffer(strLen);var view=new Uint8Array(this.valueBlock.valueHex);for(var i=0;i<strLen;i++){view[i]=inputString.charCodeAt(i);}this.valueBlock.value=inputString;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"SIMPLESTRING";}}]);return LocalSimpleStringBlock;}(BaseBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */var NumericString=/*#__PURE__*/function(_LocalSimpleStringBlo){_inherits(NumericString,_LocalSimpleStringBlo);//**********************************************************************************
/**
	 * Constructor for "NumericString" class
	 * @param {Object} [parameters={}]
	 */function NumericString(){var _this33;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,NumericString);_this33=_possibleConstructorReturn(this,_getPrototypeOf(NumericString).call(this,parameters));_this33.idBlock.tagClass=1;// UNIVERSAL
_this33.idBlock.tagNumber=18;// NumericString
return _this33;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(NumericString,null,[{key:"blockName",value:function blockName(){return"NumericString";}//**********************************************************************************
}]);return NumericString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.NumericString=NumericString;var PrintableString=/*#__PURE__*/function(_LocalSimpleStringBlo2){_inherits(PrintableString,_LocalSimpleStringBlo2);//**********************************************************************************
/**
	 * Constructor for "PrintableString" class
	 * @param {Object} [parameters={}]
	 */function PrintableString(){var _this34;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,PrintableString);_this34=_possibleConstructorReturn(this,_getPrototypeOf(PrintableString).call(this,parameters));_this34.idBlock.tagClass=1;// UNIVERSAL
_this34.idBlock.tagNumber=19;// PrintableString
return _this34;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(PrintableString,null,[{key:"blockName",value:function blockName(){return"PrintableString";}//**********************************************************************************
}]);return PrintableString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.PrintableString=PrintableString;var TeletexString=/*#__PURE__*/function(_LocalSimpleStringBlo3){_inherits(TeletexString,_LocalSimpleStringBlo3);//**********************************************************************************
/**
	 * Constructor for "TeletexString" class
	 * @param {Object} [parameters={}]
	 */function TeletexString(){var _this35;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,TeletexString);_this35=_possibleConstructorReturn(this,_getPrototypeOf(TeletexString).call(this,parameters));_this35.idBlock.tagClass=1;// UNIVERSAL
_this35.idBlock.tagNumber=20;// TeletexString
return _this35;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(TeletexString,null,[{key:"blockName",value:function blockName(){return"TeletexString";}//**********************************************************************************
}]);return TeletexString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.TeletexString=TeletexString;var VideotexString=/*#__PURE__*/function(_LocalSimpleStringBlo4){_inherits(VideotexString,_LocalSimpleStringBlo4);//**********************************************************************************
/**
	 * Constructor for "VideotexString" class
	 * @param {Object} [parameters={}]
	 */function VideotexString(){var _this36;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,VideotexString);_this36=_possibleConstructorReturn(this,_getPrototypeOf(VideotexString).call(this,parameters));_this36.idBlock.tagClass=1;// UNIVERSAL
_this36.idBlock.tagNumber=21;// VideotexString
return _this36;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(VideotexString,null,[{key:"blockName",value:function blockName(){return"VideotexString";}//**********************************************************************************
}]);return VideotexString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.VideotexString=VideotexString;var IA5String=/*#__PURE__*/function(_LocalSimpleStringBlo5){_inherits(IA5String,_LocalSimpleStringBlo5);//**********************************************************************************
/**
	 * Constructor for "IA5String" class
	 * @param {Object} [parameters={}]
	 */function IA5String(){var _this37;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,IA5String);_this37=_possibleConstructorReturn(this,_getPrototypeOf(IA5String).call(this,parameters));_this37.idBlock.tagClass=1;// UNIVERSAL
_this37.idBlock.tagNumber=22;// IA5String
return _this37;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(IA5String,null,[{key:"blockName",value:function blockName(){return"IA5String";}//**********************************************************************************
}]);return IA5String;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.IA5String=IA5String;var GraphicString=/*#__PURE__*/function(_LocalSimpleStringBlo6){_inherits(GraphicString,_LocalSimpleStringBlo6);//**********************************************************************************
/**
	 * Constructor for "GraphicString" class
	 * @param {Object} [parameters={}]
	 */function GraphicString(){var _this38;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,GraphicString);_this38=_possibleConstructorReturn(this,_getPrototypeOf(GraphicString).call(this,parameters));_this38.idBlock.tagClass=1;// UNIVERSAL
_this38.idBlock.tagNumber=25;// GraphicString
return _this38;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(GraphicString,null,[{key:"blockName",value:function blockName(){return"GraphicString";}//**********************************************************************************
}]);return GraphicString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.GraphicString=GraphicString;var VisibleString=/*#__PURE__*/function(_LocalSimpleStringBlo7){_inherits(VisibleString,_LocalSimpleStringBlo7);//**********************************************************************************
/**
	 * Constructor for "VisibleString" class
	 * @param {Object} [parameters={}]
	 */function VisibleString(){var _this39;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,VisibleString);_this39=_possibleConstructorReturn(this,_getPrototypeOf(VisibleString).call(this,parameters));_this39.idBlock.tagClass=1;// UNIVERSAL
_this39.idBlock.tagNumber=26;// VisibleString
return _this39;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(VisibleString,null,[{key:"blockName",value:function blockName(){return"VisibleString";}//**********************************************************************************
}]);return VisibleString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.VisibleString=VisibleString;var GeneralString=/*#__PURE__*/function(_LocalSimpleStringBlo8){_inherits(GeneralString,_LocalSimpleStringBlo8);//**********************************************************************************
/**
	 * Constructor for "GeneralString" class
	 * @param {Object} [parameters={}]
	 */function GeneralString(){var _this40;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,GeneralString);_this40=_possibleConstructorReturn(this,_getPrototypeOf(GeneralString).call(this,parameters));_this40.idBlock.tagClass=1;// UNIVERSAL
_this40.idBlock.tagNumber=27;// GeneralString
return _this40;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(GeneralString,null,[{key:"blockName",value:function blockName(){return"GeneralString";}//**********************************************************************************
}]);return GeneralString;}(LocalSimpleStringBlock);//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */exports.GeneralString=GeneralString;var CharacterString=/*#__PURE__*/function(_LocalSimpleStringBlo9){_inherits(CharacterString,_LocalSimpleStringBlo9);//**********************************************************************************
/**
	 * Constructor for "CharacterString" class
	 * @param {Object} [parameters={}]
	 */function CharacterString(){var _this41;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,CharacterString);_this41=_possibleConstructorReturn(this,_getPrototypeOf(CharacterString).call(this,parameters));_this41.idBlock.tagClass=1;// UNIVERSAL
_this41.idBlock.tagNumber=29;// CharacterString
return _this41;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(CharacterString,null,[{key:"blockName",value:function blockName(){return"CharacterString";}//**********************************************************************************
}]);return CharacterString;}(LocalSimpleStringBlock);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all date and time classes
//**************************************************************************************
/**
 * @extends VisibleString
 */exports.CharacterString=CharacterString;var UTCTime=/*#__PURE__*/function(_VisibleString){_inherits(UTCTime,_VisibleString);//**********************************************************************************
/**
	 * Constructor for "UTCTime" class
	 * @param {Object} [parameters={}]
	 * @property {string} [value] String representatio of the date
	 * @property {Date} [valueDate] JavaScript "Date" object
	 */function UTCTime(){var _this42;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,UTCTime);_this42=_possibleConstructorReturn(this,_getPrototypeOf(UTCTime).call(this,parameters));_this42.year=0;_this42.month=0;_this42.day=0;_this42.hour=0;_this42.minute=0;_this42.second=0;//region Create UTCTime from ASN.1 UTC string value
if("value"in parameters){_this42.fromString(parameters.value);_this42.valueBlock.valueHex=new ArrayBuffer(parameters.value.length);var view=new Uint8Array(_this42.valueBlock.valueHex);for(var i=0;i<parameters.value.length;i++){view[i]=parameters.value.charCodeAt(i);}}//endregion
//region Create GeneralizedTime from JavaScript Date type
if("valueDate"in parameters){_this42.fromDate(parameters.valueDate);_this42.valueBlock.valueHex=_this42.toBuffer();}//endregion
_this42.idBlock.tagClass=1;// UNIVERSAL
_this42.idBlock.tagNumber=23;// UTCTime
return _this42;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(UTCTime,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){this.fromString(String.fromCharCode.apply(null,new Uint8Array(inputBuffer)));}//**********************************************************************************
/**
	 * Function converting ASN.1 internal string into ArrayBuffer
	 * @returns {ArrayBuffer}
	 */},{key:"toBuffer",value:function toBuffer(){var str=this.toString();var buffer=new ArrayBuffer(str.length);var view=new Uint8Array(buffer);for(var i=0;i<str.length;i++){view[i]=str.charCodeAt(i);}return buffer;}//**********************************************************************************
/**
	 * Function converting "Date" object into ASN.1 internal string
	 * @param {!Date} inputDate JavaScript "Date" object
	 */},{key:"fromDate",value:function fromDate(inputDate){this.year=inputDate.getUTCFullYear();this.month=inputDate.getUTCMonth()+1;this.day=inputDate.getUTCDate();this.hour=inputDate.getUTCHours();this.minute=inputDate.getUTCMinutes();this.second=inputDate.getUTCSeconds();}//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Function converting ASN.1 internal string into "Date" object
	 * @returns {Date}
	 */},{key:"toDate",value:function toDate(){return new Date(Date.UTC(this.year,this.month-1,this.day,this.hour,this.minute,this.second));}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){//region Parse input string
var parser=/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;var parserArray=parser.exec(inputString);if(parserArray===null){this.error="Wrong input string for convertion";return;}//endregion
//region Store parsed values
var year=parseInt(parserArray[1],10);if(year>=50)this.year=1900+year;else this.year=2000+year;this.month=parseInt(parserArray[2],10);this.day=parseInt(parserArray[3],10);this.hour=parseInt(parserArray[4],10);this.minute=parseInt(parserArray[5],10);this.second=parseInt(parserArray[6],10);//endregion
}//**********************************************************************************
/**
	 * Function converting ASN.1 internal class into JavaScript string
	 * @returns {string}
	 */},{key:"toString",value:function toString(){var outputArray=new Array(7);outputArray[0]=(0,_pvutils.padNumber)(this.year<2000?this.year-1900:this.year-2000,2);outputArray[1]=(0,_pvutils.padNumber)(this.month,2);outputArray[2]=(0,_pvutils.padNumber)(this.day,2);outputArray[3]=(0,_pvutils.padNumber)(this.hour,2);outputArray[4]=(0,_pvutils.padNumber)(this.minute,2);outputArray[5]=(0,_pvutils.padNumber)(this.second,2);outputArray[6]="Z";return outputArray.join("");}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(UTCTime.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.year=this.year;object.month=this.month;object.day=this.day;object.hour=this.hour;object.minute=this.minute;object.second=this.second;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"UTCTime";}}]);return UTCTime;}(VisibleString);//**************************************************************************************
/**
 * @extends VisibleString
 */exports.UTCTime=UTCTime;var GeneralizedTime=/*#__PURE__*/function(_VisibleString2){_inherits(GeneralizedTime,_VisibleString2);//**********************************************************************************
/**
	 * Constructor for "GeneralizedTime" class
	 * @param {Object} [parameters={}]
	 * @property {string} [value] String representatio of the date
	 * @property {Date} [valueDate] JavaScript "Date" object
	 */function GeneralizedTime(){var _this43;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,GeneralizedTime);_this43=_possibleConstructorReturn(this,_getPrototypeOf(GeneralizedTime).call(this,parameters));_this43.year=0;_this43.month=0;_this43.day=0;_this43.hour=0;_this43.minute=0;_this43.second=0;_this43.millisecond=0;//region Create UTCTime from ASN.1 UTC string value
if("value"in parameters){_this43.fromString(parameters.value);_this43.valueBlock.valueHex=new ArrayBuffer(parameters.value.length);var view=new Uint8Array(_this43.valueBlock.valueHex);for(var i=0;i<parameters.value.length;i++){view[i]=parameters.value.charCodeAt(i);}}//endregion
//region Create GeneralizedTime from JavaScript Date type
if("valueDate"in parameters){_this43.fromDate(parameters.valueDate);_this43.valueBlock.valueHex=_this43.toBuffer();}//endregion
_this43.idBlock.tagClass=1;// UNIVERSAL
_this43.idBlock.tagNumber=24;// GeneralizedTime
return _this43;}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(GeneralizedTime,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){var resultOffset=this.valueBlock.fromBER(inputBuffer,inputOffset,this.lenBlock.isIndefiniteForm===true?inputLength:this.lenBlock.length);if(resultOffset===-1){this.error=this.valueBlock.error;return resultOffset;}this.fromBuffer(this.valueBlock.valueHex);if(this.idBlock.error.length===0)this.blockLength+=this.idBlock.blockLength;if(this.lenBlock.error.length===0)this.blockLength+=this.lenBlock.blockLength;if(this.valueBlock.error.length===0)this.blockLength+=this.valueBlock.blockLength;return resultOffset;}//**********************************************************************************
/**
	 * Function converting ArrayBuffer into ASN.1 internal string
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 */},{key:"fromBuffer",value:function fromBuffer(inputBuffer){this.fromString(String.fromCharCode.apply(null,new Uint8Array(inputBuffer)));}//**********************************************************************************
/**
	 * Function converting ASN.1 internal string into ArrayBuffer
	 * @returns {ArrayBuffer}
	 */},{key:"toBuffer",value:function toBuffer(){var str=this.toString();var buffer=new ArrayBuffer(str.length);var view=new Uint8Array(buffer);for(var i=0;i<str.length;i++){view[i]=str.charCodeAt(i);}return buffer;}//**********************************************************************************
/**
	 * Function converting "Date" object into ASN.1 internal string
	 * @param {!Date} inputDate JavaScript "Date" object
	 */},{key:"fromDate",value:function fromDate(inputDate){this.year=inputDate.getUTCFullYear();this.month=inputDate.getUTCMonth()+1;this.day=inputDate.getUTCDate();this.hour=inputDate.getUTCHours();this.minute=inputDate.getUTCMinutes();this.second=inputDate.getUTCSeconds();this.millisecond=inputDate.getUTCMilliseconds();}//**********************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
	 * Function converting ASN.1 internal string into "Date" object
	 * @returns {Date}
	 */},{key:"toDate",value:function toDate(){return new Date(Date.UTC(this.year,this.month-1,this.day,this.hour,this.minute,this.second,this.millisecond));}//**********************************************************************************
/**
	 * Function converting JavaScript string into ASN.1 internal class
	 * @param {!string} inputString ASN.1 BER encoded array
	 */},{key:"fromString",value:function fromString(inputString){//region Initial variables
var isUTC=false;var timeString="";var dateTimeString="";var fractionPart=0;var parser;var hourDifference=0;var minuteDifference=0;//endregion
//region Convert as UTC time
if(inputString[inputString.length-1]==="Z"){timeString=inputString.substr(0,inputString.length-1);isUTC=true;}//endregion
//region Convert as local time
else{//noinspection JSPrimitiveTypeWrapperUsage
var number=new Number(inputString[inputString.length-1]);if(isNaN(number.valueOf()))throw new Error("Wrong input string for convertion");timeString=inputString;}//endregion
//region Check that we do not have a "+" and "-" symbols inside UTC time
if(isUTC){if(timeString.indexOf("+")!==-1)throw new Error("Wrong input string for convertion");if(timeString.indexOf("-")!==-1)throw new Error("Wrong input string for convertion");}//endregion
//region Get "UTC time difference" in case of local time
else{var multiplier=1;var differencePosition=timeString.indexOf("+");var differenceString="";if(differencePosition===-1){differencePosition=timeString.indexOf("-");multiplier=-1;}if(differencePosition!==-1){differenceString=timeString.substr(differencePosition+1);timeString=timeString.substr(0,differencePosition);if(differenceString.length!==2&&differenceString.length!==4)throw new Error("Wrong input string for convertion");//noinspection JSPrimitiveTypeWrapperUsage
var _number=new Number(differenceString.substr(0,2));if(isNaN(_number.valueOf()))throw new Error("Wrong input string for convertion");hourDifference=multiplier*_number;if(differenceString.length===4){//noinspection JSPrimitiveTypeWrapperUsage
_number=new Number(differenceString.substr(2,2));if(isNaN(_number.valueOf()))throw new Error("Wrong input string for convertion");minuteDifference=multiplier*_number;}}}//endregion
//region Get position of fraction point
var fractionPointPosition=timeString.indexOf(".");// Check for "full stop" symbol
if(fractionPointPosition===-1)fractionPointPosition=timeString.indexOf(",");// Check for "comma" symbol
//endregion
//region Get fraction part
if(fractionPointPosition!==-1){//noinspection JSPrimitiveTypeWrapperUsage
var fractionPartCheck=new Number("0".concat(timeString.substr(fractionPointPosition)));if(isNaN(fractionPartCheck.valueOf()))throw new Error("Wrong input string for convertion");fractionPart=fractionPartCheck.valueOf();dateTimeString=timeString.substr(0,fractionPointPosition);}else dateTimeString=timeString;//endregion
//region Parse internal date
switch(true){case dateTimeString.length===8:// "YYYYMMDD"
parser=/(\d{4})(\d{2})(\d{2})/ig;if(fractionPointPosition!==-1)throw new Error("Wrong input string for convertion");// Here we should not have a "fraction point"
break;case dateTimeString.length===10:// "YYYYMMDDHH"
parser=/(\d{4})(\d{2})(\d{2})(\d{2})/ig;if(fractionPointPosition!==-1){var fractionResult=60*fractionPart;this.minute=Math.floor(fractionResult);fractionResult=60*(fractionResult-this.minute);this.second=Math.floor(fractionResult);fractionResult=1000*(fractionResult-this.second);this.millisecond=Math.floor(fractionResult);}break;case dateTimeString.length===12:// "YYYYMMDDHHMM"
parser=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;if(fractionPointPosition!==-1){var _fractionResult=60*fractionPart;this.second=Math.floor(_fractionResult);_fractionResult=1000*(_fractionResult-this.second);this.millisecond=Math.floor(_fractionResult);}break;case dateTimeString.length===14:// "YYYYMMDDHHMMSS"
parser=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;if(fractionPointPosition!==-1){var _fractionResult2=1000*fractionPart;this.millisecond=Math.floor(_fractionResult2);}break;default:throw new Error("Wrong input string for convertion");}//endregion
//region Put parsed values at right places
var parserArray=parser.exec(dateTimeString);if(parserArray===null)throw new Error("Wrong input string for convertion");for(var j=1;j<parserArray.length;j++){switch(j){case 1:this.year=parseInt(parserArray[j],10);break;case 2:this.month=parseInt(parserArray[j],10);break;case 3:this.day=parseInt(parserArray[j],10);break;case 4:this.hour=parseInt(parserArray[j],10)+hourDifference;break;case 5:this.minute=parseInt(parserArray[j],10)+minuteDifference;break;case 6:this.second=parseInt(parserArray[j],10);break;default:throw new Error("Wrong input string for convertion");}}//endregion
//region Get final date
if(isUTC===false){var tempDate=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond);this.year=tempDate.getUTCFullYear();this.month=tempDate.getUTCMonth();this.day=tempDate.getUTCDay();this.hour=tempDate.getUTCHours();this.minute=tempDate.getUTCMinutes();this.second=tempDate.getUTCSeconds();this.millisecond=tempDate.getUTCMilliseconds();}//endregion
}//**********************************************************************************
/**
	 * Function converting ASN.1 internal class into JavaScript string
	 * @returns {string}
	 */},{key:"toString",value:function toString(){var outputArray=[];outputArray.push((0,_pvutils.padNumber)(this.year,4));outputArray.push((0,_pvutils.padNumber)(this.month,2));outputArray.push((0,_pvutils.padNumber)(this.day,2));outputArray.push((0,_pvutils.padNumber)(this.hour,2));outputArray.push((0,_pvutils.padNumber)(this.minute,2));outputArray.push((0,_pvutils.padNumber)(this.second,2));if(this.millisecond!==0){outputArray.push(".");outputArray.push((0,_pvutils.padNumber)(this.millisecond,3));}outputArray.push("Z");return outputArray.join("");}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */},{key:"toJSON",//**********************************************************************************
/**
	 * Convertion for the block to JSON object
	 * @returns {Object}
	 */value:function toJSON(){var object={};//region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
try{object=_get(_getPrototypeOf(GeneralizedTime.prototype),"toJSON",this).call(this);}catch(ex){}//endregion
object.year=this.year;object.month=this.month;object.day=this.day;object.hour=this.hour;object.minute=this.minute;object.second=this.second;object.millisecond=this.millisecond;return object;}//**********************************************************************************
}],[{key:"blockName",value:function blockName(){return"GeneralizedTime";}}]);return GeneralizedTime;}(VisibleString);//**************************************************************************************
/**
 * @extends Utf8String
 */exports.GeneralizedTime=GeneralizedTime;var DATE=/*#__PURE__*/function(_Utf8String){_inherits(DATE,_Utf8String);//**********************************************************************************
/**
	 * Constructor for "DATE" class
	 * @param {Object} [parameters={}]
	 */function DATE(){var _this44;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,DATE);_this44=_possibleConstructorReturn(this,_getPrototypeOf(DATE).call(this,parameters));_this44.idBlock.tagClass=1;// UNIVERSAL
_this44.idBlock.tagNumber=31;// DATE
return _this44;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(DATE,null,[{key:"blockName",value:function blockName(){return"DATE";}//**********************************************************************************
}]);return DATE;}(Utf8String);//**************************************************************************************
/**
 * @extends Utf8String
 */exports.DATE=DATE;var TimeOfDay=/*#__PURE__*/function(_Utf8String2){_inherits(TimeOfDay,_Utf8String2);//**********************************************************************************
/**
	 * Constructor for "TimeOfDay" class
	 * @param {Object} [parameters={}]
	 */function TimeOfDay(){var _this45;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,TimeOfDay);_this45=_possibleConstructorReturn(this,_getPrototypeOf(TimeOfDay).call(this,parameters));_this45.idBlock.tagClass=1;// UNIVERSAL
_this45.idBlock.tagNumber=32;// TimeOfDay
return _this45;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(TimeOfDay,null,[{key:"blockName",value:function blockName(){return"TimeOfDay";}//**********************************************************************************
}]);return TimeOfDay;}(Utf8String);//**************************************************************************************
/**
 * @extends Utf8String
 */exports.TimeOfDay=TimeOfDay;var DateTime=/*#__PURE__*/function(_Utf8String3){_inherits(DateTime,_Utf8String3);//**********************************************************************************
/**
	 * Constructor for "DateTime" class
	 * @param {Object} [parameters={}]
	 */function DateTime(){var _this46;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,DateTime);_this46=_possibleConstructorReturn(this,_getPrototypeOf(DateTime).call(this,parameters));_this46.idBlock.tagClass=1;// UNIVERSAL
_this46.idBlock.tagNumber=33;// DateTime
return _this46;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(DateTime,null,[{key:"blockName",value:function blockName(){return"DateTime";}//**********************************************************************************
}]);return DateTime;}(Utf8String);//**************************************************************************************
/**
 * @extends Utf8String
 */exports.DateTime=DateTime;var Duration=/*#__PURE__*/function(_Utf8String4){_inherits(Duration,_Utf8String4);//**********************************************************************************
/**
	 * Constructor for "Duration" class
	 * @param {Object} [parameters={}]
	 */function Duration(){var _this47;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Duration);_this47=_possibleConstructorReturn(this,_getPrototypeOf(Duration).call(this,parameters));_this47.idBlock.tagClass=1;// UNIVERSAL
_this47.idBlock.tagNumber=34;// Duration
return _this47;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(Duration,null,[{key:"blockName",value:function blockName(){return"Duration";}//**********************************************************************************
}]);return Duration;}(Utf8String);//**************************************************************************************
/**
 * @extends Utf8String
 */exports.Duration=Duration;var TIME=/*#__PURE__*/function(_Utf8String5){_inherits(TIME,_Utf8String5);//**********************************************************************************
/**
	 * Constructor for "Time" class
	 * @param {Object} [parameters={}]
	 */function TIME(){var _this48;var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,TIME);_this48=_possibleConstructorReturn(this,_getPrototypeOf(TIME).call(this,parameters));_this48.idBlock.tagClass=1;// UNIVERSAL
_this48.idBlock.tagNumber=14;// Time
return _this48;}//**********************************************************************************
/**
	 * Aux function, need to get a block name. Need to have it here for inhiritence
	 * @returns {string}
	 */_createClass(TIME,null,[{key:"blockName",value:function blockName(){return"TIME";}//**********************************************************************************
}]);return TIME;}(Utf8String);//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Choice
//**************************************************************************************
exports.TIME=TIME;var Choice=//**********************************************************************************
/**
	 * Constructor for "Choice" class
	 * @param {Object} [parameters={}]
	 * @property {Array} [value] Array of ASN.1 types for make a choice from
	 * @property {boolean} [optional]
	 */function Choice(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Choice);this.value=(0,_pvutils.getParametersValue)(parameters,"value",[]);this.optional=(0,_pvutils.getParametersValue)(parameters,"optional",false);}//**********************************************************************************
;//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Any
//**************************************************************************************
exports.Choice=Choice;var Any=//**********************************************************************************
/**
	 * Constructor for "Any" class
	 * @param {Object} [parameters={}]
	 * @property {string} [name]
	 * @property {boolean} [optional]
	 */function Any(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Any);this.name=(0,_pvutils.getParametersValue)(parameters,"name","");this.optional=(0,_pvutils.getParametersValue)(parameters,"optional",false);}//**********************************************************************************
;//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Repeated
//**************************************************************************************
exports.Any=Any;var Repeated=//**********************************************************************************
/**
	 * Constructor for "Repeated" class
	 * @param {Object} [parameters={}]
	 * @property {string} [name]
	 * @property {boolean} [optional]
	 */function Repeated(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Repeated);this.name=(0,_pvutils.getParametersValue)(parameters,"name","");this.optional=(0,_pvutils.getParametersValue)(parameters,"optional",false);this.value=(0,_pvutils.getParametersValue)(parameters,"value",new Any());this.local=(0,_pvutils.getParametersValue)(parameters,"local",false);// Could local or global array to store elements
}//**********************************************************************************
;//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type RawData
//**************************************************************************************
/**
 * @description Special class providing ability to have "toBER/fromBER" for raw ArrayBuffer
 */exports.Repeated=Repeated;var RawData=/*#__PURE__*/function(){//**********************************************************************************
/**
	 * Constructor for "Repeated" class
	 * @param {Object} [parameters={}]
	 * @property {string} [name]
	 * @property {boolean} [optional]
	 */function RawData(){var parameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,RawData);this.data=(0,_pvutils.getParametersValue)(parameters,"data",new ArrayBuffer(0));}//**********************************************************************************
/**
	 * Base function for converting block from BER encoded array of bytes
	 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
	 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
	 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
	 * @returns {number} Offset after least decoded byte
	 */_createClass(RawData,[{key:"fromBER",value:function fromBER(inputBuffer,inputOffset,inputLength){this.data=inputBuffer.slice(inputOffset,inputLength);return inputOffset+inputLength;}//**********************************************************************************
/**
	 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
	 * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
	 * @returns {ArrayBuffer}
	 */},{key:"toBER",value:function toBER(){var sizeOnly=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.data;}//**********************************************************************************
}]);return RawData;}();//**************************************************************************************
//endregion
//**************************************************************************************
//region Major ASN.1 BER decoding function
//**************************************************************************************
/**
 * Internal library function for decoding ASN.1 BER
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
 * @returns {{offset: number, result: Object}}
 */exports.RawData=RawData;function LocalFromBER(inputBuffer,inputOffset,inputLength){var incomingOffset=inputOffset;// Need to store initial offset since "inputOffset" is changing in the function
//region Local function changing a type for ASN.1 classes
function localChangeType(inputObject,newType){if(inputObject instanceof newType)return inputObject;var newObject=new newType();newObject.idBlock=inputObject.idBlock;newObject.lenBlock=inputObject.lenBlock;newObject.warnings=inputObject.warnings;//noinspection JSCheckFunctionSignatures
newObject.valueBeforeDecode=inputObject.valueBeforeDecode.slice(0);return newObject;}//endregion
//region Create a basic ASN.1 type since we need to return errors and warnings from the function
var returnObject=new BaseBlock({},Object);//endregion
//region Basic check for parameters
if((0,_pvutils.checkBufferParams)(new LocalBaseBlock(),inputBuffer,inputOffset,inputLength)===false){returnObject.error="Wrong input parameters";return{offset:-1,result:returnObject};}//endregion
//region Getting Uint8Array from ArrayBuffer
var intBuffer=new Uint8Array(inputBuffer,inputOffset,inputLength);//endregion
//region Initial checks
if(intBuffer.length===0){this.error="Zero buffer length";return{offset:-1,result:returnObject};}//endregion
//region Decode indentifcation block of ASN.1 BER structure
var resultOffset=returnObject.idBlock.fromBER(inputBuffer,inputOffset,inputLength);returnObject.warnings.concat(returnObject.idBlock.warnings);if(resultOffset===-1){returnObject.error=returnObject.idBlock.error;return{offset:-1,result:returnObject};}inputOffset=resultOffset;inputLength-=returnObject.idBlock.blockLength;//endregion
//region Decode length block of ASN.1 BER structure
resultOffset=returnObject.lenBlock.fromBER(inputBuffer,inputOffset,inputLength);returnObject.warnings.concat(returnObject.lenBlock.warnings);if(resultOffset===-1){returnObject.error=returnObject.lenBlock.error;return{offset:-1,result:returnObject};}inputOffset=resultOffset;inputLength-=returnObject.lenBlock.blockLength;//endregion
//region Check for usign indefinite length form in encoding for primitive types
if(returnObject.idBlock.isConstructed===false&&returnObject.lenBlock.isIndefiniteForm===true){returnObject.error="Indefinite length form used for primitive encoding form";return{offset:-1,result:returnObject};}//endregion
//region Switch ASN.1 block type
var newASN1Type=BaseBlock;switch(returnObject.idBlock.tagClass){//region UNIVERSAL
case 1://region Check for reserved tag numbers
if(returnObject.idBlock.tagNumber>=37&&returnObject.idBlock.isHexOnly===false){returnObject.error="UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";return{offset:-1,result:returnObject};}//endregion
switch(returnObject.idBlock.tagNumber){//region EndOfContent type
case 0://region Check for EndOfContent type
if(returnObject.idBlock.isConstructed===true&&returnObject.lenBlock.length>0){returnObject.error="Type [UNIVERSAL 0] is reserved";return{offset:-1,result:returnObject};}//endregion
newASN1Type=EndOfContent;break;//endregion
//region Boolean type
case 1:newASN1Type=Boolean;break;//endregion
//region Integer type
case 2:newASN1Type=Integer;break;//endregion
//region BitString type
case 3:newASN1Type=BitString;break;//endregion
//region OctetString type
case 4:newASN1Type=OctetString;break;//endregion
//region Null type
case 5:newASN1Type=Null;break;//endregion
//region OBJECT IDENTIFIER type
case 6:newASN1Type=ObjectIdentifier;break;//endregion
//region Enumerated type
case 10:newASN1Type=Enumerated;break;//endregion
//region Utf8String type
case 12:newASN1Type=Utf8String;break;//endregion
//region Time type
case 14:newASN1Type=TIME;break;//endregion
//region ASN.1 reserved type
case 15:returnObject.error="[UNIVERSAL 15] is reserved by ASN.1 standard";return{offset:-1,result:returnObject};//endregion
//region Sequence type
case 16:newASN1Type=Sequence;break;//endregion
//region Set type
case 17:newASN1Type=Set;break;//endregion
//region NumericString type
case 18:newASN1Type=NumericString;break;//endregion
//region PrintableString type
case 19:newASN1Type=PrintableString;break;//endregion
//region TeletexString type
case 20:newASN1Type=TeletexString;break;//endregion
//region VideotexString type
case 21:newASN1Type=VideotexString;break;//endregion
//region IA5String type
case 22:newASN1Type=IA5String;break;//endregion
//region UTCTime type
case 23:newASN1Type=UTCTime;break;//endregion
//region GeneralizedTime type
case 24:newASN1Type=GeneralizedTime;break;//endregion
//region GraphicString type
case 25:newASN1Type=GraphicString;break;//endregion
//region VisibleString type
case 26:newASN1Type=VisibleString;break;//endregion
//region GeneralString type
case 27:newASN1Type=GeneralString;break;//endregion
//region UniversalString type
case 28:newASN1Type=UniversalString;break;//endregion
//region CharacterString type
case 29:newASN1Type=CharacterString;break;//endregion
//region BmpString type
case 30:newASN1Type=BmpString;break;//endregion
//region DATE type
case 31:newASN1Type=DATE;break;//endregion
//region TimeOfDay type
case 32:newASN1Type=TimeOfDay;break;//endregion
//region Date-Time type
case 33:newASN1Type=DateTime;break;//endregion
//region Duration type
case 34:newASN1Type=Duration;break;//endregion
//region default
default:{var newObject;if(returnObject.idBlock.isConstructed===true)newObject=new Constructed();else newObject=new Primitive();newObject.idBlock=returnObject.idBlock;newObject.lenBlock=returnObject.lenBlock;newObject.warnings=returnObject.warnings;returnObject=newObject;resultOffset=returnObject.fromBER(inputBuffer,inputOffset,inputLength);}//endregion
}break;//endregion
//region All other tag classes
case 2:// APPLICATION
case 3:// CONTEXT-SPECIFIC
case 4:// PRIVATE
default:{if(returnObject.idBlock.isConstructed===true)newASN1Type=Constructed;else newASN1Type=Primitive;}//endregion
}//endregion
//region Change type and perform BER decoding
returnObject=localChangeType(returnObject,newASN1Type);resultOffset=returnObject.fromBER(inputBuffer,inputOffset,returnObject.lenBlock.isIndefiniteForm===true?inputLength:returnObject.lenBlock.length);//endregion
//region Coping incoming buffer for entire ASN.1 block
returnObject.valueBeforeDecode=inputBuffer.slice(incomingOffset,incomingOffset+returnObject.blockLength);//endregion
return{offset:resultOffset,result:returnObject};}//**************************************************************************************
/**
 * Major function for decoding ASN.1 BER array into internal library structuries
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
 */function fromBER(inputBuffer){if(inputBuffer.byteLength===0){var result=new BaseBlock({},Object);result.error="Input buffer has zero length";return{offset:-1,result:result};}return LocalFromBER(inputBuffer,0,inputBuffer.byteLength);}//**************************************************************************************
//endregion
//**************************************************************************************
//region Major scheme verification function
//**************************************************************************************
/**
 * Compare of two ASN.1 object trees
 * @param {!Object} root Root of input ASN.1 object tree
 * @param {!Object} inputData Input ASN.1 object tree
 * @param {!Object} inputSchema Input ASN.1 schema to compare with
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */function compareSchema(root,inputData,inputSchema){//region Special case for Choice schema element type
if(inputSchema instanceof Choice){var choiceResult=false;for(var j=0;j<inputSchema.value.length;j++){var result=compareSchema(root,inputData,inputSchema.value[j]);if(result.verified===true){return{verified:true,result:root};}}if(choiceResult===false){var _result={verified:false,result:{error:"Wrong values for Choice type"}};if(inputSchema.hasOwnProperty("name"))_result.name=inputSchema.name;return _result;}}//endregion
//region Special case for Any schema element type
if(inputSchema instanceof Any){//region Add named component of ASN.1 schema
if(inputSchema.hasOwnProperty("name"))root[inputSchema.name]=inputData;//endregion
return{verified:true,result:root};}//endregion
//region Initial check
if(root instanceof Object===false){return{verified:false,result:{error:"Wrong root object"}};}if(inputData instanceof Object===false){return{verified:false,result:{error:"Wrong ASN.1 data"}};}if(inputSchema instanceof Object===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if("idBlock"in inputSchema===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}//endregion
//region Comparing idBlock properties in ASN.1 data and ASN.1 schema
//region Encode and decode ASN.1 schema idBlock
/// <remarks>This encoding/decoding is neccessary because could be an errors in schema definition</remarks>
if("fromBER"in inputSchema.idBlock===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if("toBER"in inputSchema.idBlock===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}var encodedId=inputSchema.idBlock.toBER(false);if(encodedId.byteLength===0){return{verified:false,result:{error:"Error encoding idBlock for ASN.1 schema"}};}var decodedOffset=inputSchema.idBlock.fromBER(encodedId,0,encodedId.byteLength);if(decodedOffset===-1){return{verified:false,result:{error:"Error decoding idBlock for ASN.1 schema"}};}//endregion
//region tagClass
if(inputSchema.idBlock.hasOwnProperty("tagClass")===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if(inputSchema.idBlock.tagClass!==inputData.idBlock.tagClass){return{verified:false,result:root};}//endregion
//region tagNumber
if(inputSchema.idBlock.hasOwnProperty("tagNumber")===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if(inputSchema.idBlock.tagNumber!==inputData.idBlock.tagNumber){return{verified:false,result:root};}//endregion
//region isConstructed
if(inputSchema.idBlock.hasOwnProperty("isConstructed")===false){return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if(inputSchema.idBlock.isConstructed!==inputData.idBlock.isConstructed){return{verified:false,result:root};}//endregion
//region isHexOnly
if("isHexOnly"in inputSchema.idBlock===false)// Since 'isHexOnly' is an inhirited property
{return{verified:false,result:{error:"Wrong ASN.1 schema"}};}if(inputSchema.idBlock.isHexOnly!==inputData.idBlock.isHexOnly){return{verified:false,result:root};}//endregion
//region valueHex
if(inputSchema.idBlock.isHexOnly===true){if("valueHex"in inputSchema.idBlock===false)// Since 'valueHex' is an inhirited property
{return{verified:false,result:{error:"Wrong ASN.1 schema"}};}var schemaView=new Uint8Array(inputSchema.idBlock.valueHex);var asn1View=new Uint8Array(inputData.idBlock.valueHex);if(schemaView.length!==asn1View.length){return{verified:false,result:root};}for(var i=0;i<schemaView.length;i++){if(schemaView[i]!==asn1View[1]){return{verified:false,result:root};}}}//endregion
//endregion
//region Add named component of ASN.1 schema
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!=="")root[inputSchema.name]=inputData;}//endregion
//region Getting next ASN.1 block for comparition
if(inputSchema.idBlock.isConstructed===true){var admission=0;var _result2={verified:false};var maxLength=inputSchema.valueBlock.value.length;if(maxLength>0){if(inputSchema.valueBlock.value[0]instanceof Repeated)maxLength=inputData.valueBlock.value.length;}//region Special case when constructive value has no elements
if(maxLength===0){return{verified:true,result:root};}//endregion
//region Special case when "inputData" has no values and "inputSchema" has all optional values
if(inputData.valueBlock.value.length===0&&inputSchema.valueBlock.value.length!==0){var _optional=true;for(var _i8=0;_i8<inputSchema.valueBlock.value.length;_i8++){_optional=_optional&&(inputSchema.valueBlock.value[_i8].optional||false);}if(_optional===true){return{verified:true,result:root};}//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!=="")delete root[inputSchema.name];}//endregion
root.error="Inconsistent object length";return{verified:false,result:root};}//endregion
for(var _i9=0;_i9<maxLength;_i9++){//region Special case when there is an "optional" element of ASN.1 schema at the end
if(_i9-admission>=inputData.valueBlock.value.length){if(inputSchema.valueBlock.value[_i9].optional===false){var _result3={verified:false,result:root};root.error="Inconsistent length between ASN.1 data and schema";//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!==""){delete root[inputSchema.name];_result3.name=inputSchema.name;}}//endregion
return _result3;}}//endregion
else{//region Special case for Repeated type of ASN.1 schema element
if(inputSchema.valueBlock.value[0]instanceof Repeated){_result2=compareSchema(root,inputData.valueBlock.value[_i9],inputSchema.valueBlock.value[0].value);if(_result2.verified===false){if(inputSchema.valueBlock.value[0].optional===true)admission++;else{//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!=="")delete root[inputSchema.name];}//endregion
return _result2;}}if("name"in inputSchema.valueBlock.value[0]&&inputSchema.valueBlock.value[0].name.length>0){var arrayRoot={};if("local"in inputSchema.valueBlock.value[0]&&inputSchema.valueBlock.value[0].local===true)arrayRoot=inputData;else arrayRoot=root;if(typeof arrayRoot[inputSchema.valueBlock.value[0].name]==="undefined")arrayRoot[inputSchema.valueBlock.value[0].name]=[];arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[_i9]);}}//endregion
else{_result2=compareSchema(root,inputData.valueBlock.value[_i9-admission],inputSchema.valueBlock.value[_i9]);if(_result2.verified===false){if(inputSchema.valueBlock.value[_i9].optional===true)admission++;else{//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!=="")delete root[inputSchema.name];}//endregion
return _result2;}}}}}if(_result2.verified===false)// The situation may take place if last element is "optional" and verification failed
{var _result4={verified:false,result:root};//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!==""){delete root[inputSchema.name];_result4.name=inputSchema.name;}}//endregion
return _result4;}return{verified:true,result:root};}//endregion
//region Ability to parse internal value for primitive-encoded value (value of OctetString, for example)
if("primitiveSchema"in inputSchema&&"valueHex"in inputData.valueBlock){//region Decoding of raw ASN.1 data
var asn1=fromBER(inputData.valueBlock.valueHex);if(asn1.offset===-1){var _result5={verified:false,result:asn1.result};//region Delete early added name of block
if(inputSchema.hasOwnProperty("name")){inputSchema.name=inputSchema.name.replace(/^\s+|\s+$/g,"");if(inputSchema.name!==""){delete root[inputSchema.name];_result5.name=inputSchema.name;}}//endregion
return _result5;}//endregion
return compareSchema(root,asn1.result,inputSchema.primitiveSchema);}return{verified:true,result:root};//endregion
}//**************************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
 * ASN.1 schema verification for ArrayBuffer data
 * @param {!ArrayBuffer} inputBuffer Input BER-encoded ASN.1 data
 * @param {!Object} inputSchema Input ASN.1 schema to verify against to
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */function verifySchema(inputBuffer,inputSchema){//region Initial check
if(inputSchema instanceof Object===false){return{verified:false,result:{error:"Wrong ASN.1 schema type"}};}//endregion
//region Decoding of raw ASN.1 data
var asn1=fromBER(inputBuffer);if(asn1.offset===-1){return{verified:false,result:asn1.result};}//endregion
//region Compare ASN.1 struct with input schema
return compareSchema(asn1.result,asn1.result,inputSchema);//endregion
}//**************************************************************************************
//endregion
//**************************************************************************************
//region Major function converting JSON to ASN.1 objects
//**************************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
 * Converting from JSON to ASN.1 objects
 * @param {string|Object} json JSON string or object to convert to ASN.1 objects
 */function fromJSON(json){}// TODO Implement
//**************************************************************************************
//endregion
//**************************************************************************************
//# sourceMappingURL=asn1.js.map