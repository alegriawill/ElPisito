package com.ipartek.springboot.backend.elpisito.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipartek.springboot.backend.elpisito.models.dao.IUsuarioDAO;

import com.ipartek.springboot.backend.elpisito.models.entity.Usuario;



@Service
public class UsuarioServiceImpl implements IUsuarioService {

	@Autowired
	private IUsuarioDAO usuarioDAO;

	@Override
	public List<Usuario> findAll() {
		return (List<Usuario>)usuarioDAO.findAll();
	}

	@Override
	public Usuario findById(Long id) {
		return usuarioDAO.findById(id).orElse(null);
	}

	@Override
	public Usuario save(Usuario usuario) {
		return usuarioDAO.save(usuario);
	}

	@Override
	public void deleteById(Long id) {
		usuarioDAO.deleteById(id);
		
	}
	
	

}
