package com.lojaVirtual.dto;

public class PedidoDTO {
    private long id;
    private String numPedido;
    private String data;
    private String status;

    public PedidoDTO(long id, String numPedido, String data, String status) {
        this.id = id;
        this.numPedido = numPedido;
        this.data = data;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNumPedido() {
        return numPedido;
    }

    public void setNumPedido(String numPedido) {
        this.numPedido = numPedido;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
