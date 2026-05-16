package core

type UnsolicitedAdviceError struct {
	IsUnsolicitedAdviceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUnsolicitedAdviceError(code string, msg string, ctx *Context) *UnsolicitedAdviceError {
	return &UnsolicitedAdviceError{
		IsUnsolicitedAdviceError: true,
		Sdk:              "UnsolicitedAdvice",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UnsolicitedAdviceError) Error() string {
	return e.Msg
}
