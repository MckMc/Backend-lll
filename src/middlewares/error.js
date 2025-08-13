export const ERRORS = {
  INVALID_ARGUMENT: { status:400, code:'INVALID_ARGUMENT', msg:'Parámetros inválidos' },
  DUPLICATE_EMAIL:  { status:409, code:'DUPLICATE_EMAIL',  msg:'Email ya registrado' },
  NOT_FOUND:        { status:404, code:'NOT_FOUND',        msg:'Recurso no encontrado' },
  UNAUTHORIZED:     { status:401, code:'UNAUTHORIZED',     msg:'No autenticado' },
  FORBIDDEN:        { status:403, code:'FORBIDDEN',        msg:'No autorizado' },
  INTERNAL:         { status:500, code:'INTERNAL_ERROR',   msg:'Error interno' },
};

export class AppError extends Error {
  constructor(type = ERRORS.INTERNAL, detail) {
    super(detail || type.msg);
    this.status = type.status;
    this.code = type.code;
  }
}

export const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const body = {
    status: 'error',
    code: err.code || 'INTERNAL_ERROR',
    message: err.message || 'Unexpected error'
  };
  res.status(status).json(body);
};
